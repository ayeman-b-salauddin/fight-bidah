import React, {  } from 'react'
import {createClient} from 'contentful'


function LandingPage() {
    const salatApi = "https://api.aladhan.com/v1/timingsByCity?city=Dhaka&country=Bangladesh&method=8"
    const client =  createClient({
      space: process.env.CONTENTFUL_SPACE_ID, 
      accessToken: process.env.CONTENTFUL_ACCESS_KEY
    })
    const items =  client.getEntries()
    console.log("items");

    console.log(items);

    // useEffect(async() => {
    //   const client = await createClient({
    //     space: process.env.CONTENTFUL_SPACE_ID, 
    //     accessToken: process.env.CONTENTFUL_ACCESS_KEY
    //   })
    //   const items = await client.getEntries()
    //   console.log("items");

    //   console.log(items);
    // }, [])
    
  return (
    <div>landingPage</div>
  )
}

export default LandingPage