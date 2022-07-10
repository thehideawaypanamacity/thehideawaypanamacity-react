import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { MyCalendar } from "../../components/MyCalendar/MyCalendar";
import Section from "../../components/Section/Section";
import listingsData from "../../data/listings.json";
import styles from "./Home.module.css";
import { setAdditionalListingProps } from "../../utils/calendarData";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const [listings, setListings] = useState(listingsData);

  useEffect(() => {
    const mutatedListings = listings.map(setAdditionalListingProps);

    setListings(mutatedListings);

    //Reason when we mutate listings and adding calendar ranges via next api is that fetching calendar on client side causes CORS.
    fetch(router.basePath + "api/calendar", {
      method: "POST",
      body: JSON.stringify(mutatedListings),
    })
    .then(response => response.json())
    .then((mutatedListings) => {
      if (mutatedListings && mutatedListings.length) {

        setListings(mutatedListings);
      }
    })
  }, []);

  return (
    <div>
      <Section title="Our Listings">
        {listings.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            subtitle={card.subtitle}
            carousel={true}
            images={card.images}
            text={card.text}
            style={card.style}
          >
            {card.calendarRanges && (
              <MyCalendar ranges={card.calendarRanges}></MyCalendar>
            )}

            <div className={styles["book-button-group"]}>
              {card.airBnbLink ? (
                <Button url={card.airBnbLink}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="airbnb book button icon"
                    src="/assets/icons/airbnb_w.svg"
                  />
                  Book On AirBnb
                </Button>
              ) : null}
              {card.vrboLink ? (
                <Button className={styles["vrbo"]} url={card.vrboLink}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="vrbo book button icon"
                    src="/assets/icons/vrbo_w.svg"
                  />
                  Book On VRBO
                </Button>
              ) : null}
            </div>
          </Card>
        ))}
      </Section>
    </div>
  );
};

export default Home;
