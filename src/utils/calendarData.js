const ical = require('ical');

const isEventType = (data) => (property) => data[property].type === 'VEVENT';

const addDaysToDate = (date, days) => {
    const result = new Date(date);

    result.setDate(result.getDate() + days);

    return result;
}

const getCalendarRangeObj = (data, options) => (property) => {
    // calculate checkin and checkout dates
    const calculatedStart = addDaysToDate(data[property].start, 1);
    const calculatedEnd = addDaysToDate(data[property].end, -1);

    //JSON parse is needed for Nextjs getStaticProps to return result into component props
    const startDate = JSON.parse(JSON.stringify(calculatedStart));
    const endDate = JSON.parse(JSON.stringify(calculatedEnd));

    return {
        startDate,
        endDate,
        color: options && options.color ? options.color : 'red',
        disabled: options && options.disabled ? options.disabled : true,
        showDateDisplay: options && options.showDateDisplay ? options.showDateDisplay : false,
        showPreview: options && options.showPreview ? options.showPreview : false
    } 
};

export const getCalendarEventsFromUrl = async (url, rangeOptions) => {
    if(!url) return [];

    try {
        const response = await fetch(url);
        const data = await response.text()
        const parsedData = ical.parseICS(data);
        const calendarData = Object
            .keys(parsedData)
            .filter(isEventType(parsedData))
            .map(getCalendarRangeObj(parsedData, rangeOptions));

        return calendarData;
    } catch (error) {
        console.error(`Failed to fetch callendar from "${url}"`)
        console.error(error);
        return [];
    }
}

export const setListingsCalendarRange = async (listing) => {
    const airBnbCalendarRanges = await getCalendarEventsFromUrl(
      listing.airBnbCalendarLink,
      {
        color: "#FF5722",
      }
    );
    const vrboCalendarRanges = await getCalendarEventsFromUrl(
      listing.vrboCalendarLink,
      {
        color: "#02537e",
      }
    );

    listing.calendarRanges = airBnbCalendarRanges.concat(vrboCalendarRanges);

    return listing;
  };

export const setAdditionalImageProps = (listing) => (image) => ({
  ...image,
  src: `./assets/images/${listing.imageBaseUrl || ""}${image.src}`,
  alt: listing.title,
});

export const setAdditionalListingProps = (listing) => ({
  ...listing,
  images: listing.images.map(setAdditionalImageProps(listing)),
});
