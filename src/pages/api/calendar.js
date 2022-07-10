
import { setListingsCalendarRange} from "../../utils/calendarData"

export default async function handler(_req, res) {
  const promises = []
  const listingsData = JSON.parse(_req.body)
  
  if(_req.method === "POST") {
    for (const listing of listingsData) {
        promises.push(setListingsCalendarRange(listing))
      }
    
      const listingsResponseData = await Promise.all(promises)
    
      res.status(200).json(listingsResponseData)
  } else {
    res.status(405)
  }
}