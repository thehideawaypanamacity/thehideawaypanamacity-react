import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { MyCalendar } from "../../components/MyCalendar/MyCalendar";
import Section from "../../components/Section/Section";
import listingsData from "../../data/listings.json";
import { setListingsCalendarRange, setAdditionalListingProps } from "../../utils/calendarData";
import styles from "./Home.module.css";
import Image from 'next/image'

const Home = ({ listingsResponseData }) => {
  return (
    <div>
      <Section title="Our Listings">
        {listingsResponseData.map(setAdditionalListingProps).map((card, i) => (
          <Card
            key={i}
            title={card.title}
            subtitle={card.subtitle}
            carousel={true}
            images={card.images}
            text={card.text}
            style={card.style}
          >

            <MyCalendar ranges={card.calendarRanges}></MyCalendar>

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

export async function getStaticProps (ctx) {
  const promises = []

  for (const listing of listingsData) {
    promises.push(setListingsCalendarRange(listing))
  }

  const listingsResponseData = await Promise.all(promises)

  return { props: {listingsResponseData} };
};

export default Home;
