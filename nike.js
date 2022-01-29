const axios = require("axios");
const fs = require("fs");
var util = require("util");
// https://github.com/stvea/SnkrsBot/blob/414b46c78d7b14cc2987663240450defe2d7c53e/ApiFunc.py#L65


UserAgent = "SNKRS/3.7.2 (iPhone; iOS 12.0.1; Scale/2.00)"
XAcfSensorData="1,i,L5PayBhlnEjJmHxog6XronG54XSceWoGAC6d6lkz+0Una0GEoLSkIZA0PkbIFgYC3/Kgg48wvOkHuB9xry0aOTilmkbeVnZaSalEwz4/2qOyfahgQ4748Rg3YTk03Y0HnWqcgwfGLQrz2YItpoVVaOqdl4f7pGHE95ZDptZqI3s=,o56ITqNSJGtRzW6UtyFOkuQnFwZxo2D5fKVxaxrOS718z537RF8L03xTn34uyTtxWob3eFUcA7Or5l61As7z0HfhohwTiO14F04Ny+2Z1jqtKTOFW+6DVgpg1bakyw4+NsgWC9xWmV2D2RTWQnMhT+WNoqI3wLkxa8bQoPFGwFw=$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$16,9,33"
xNikeCaller = "nike:snkrs:ios:3.7"


const run = async function () {
  try {
    let auth =
      "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZmY4YTAyLWIyZGEtNDhkZC1iOGVjLThhMmM1MGE2YTM0MnNpZyJ9.eyJ0cnVzdCI6MTAwLCJpYXQiOjE2NDMyNDI4MDIsImV4cCI6MTY0MzI0NjQwMiwiaXNzIjoib2F1dGgyYWNjIiwianRpIjoiZGQ3ZDlmN2YtNGQ3YS00ZmI0LWE0N2MtYzFlNjQ5NmU1N2YxIiwibGF0IjoxNjQzMjM3ODM3LCJhdWQiOiJjb20ubmlrZS5kaWdpdGFsIiwic3ViIjoiY29tLm5pa2UuY29tbWVyY2Uuc25rcnMud2ViIiwic2J0IjoibmlrZTphcHAiLCJzY3AiOlsiY29tbWVyY2UiXSwicHJuIjoiZmMyMjE4MzktNzYxZS00Mjg2LTg3N2UtMzY0MjM1NGEwNmM2IiwicHJ0IjoibmlrZTpwbHVzIn0.MqIGst031eQhDqKytgci-6vB3bVoEYW6jo_bDra1siS-ae8Yn3MNKz_YAQRQw71GQH1v-qRCOappUkk-lzCOz4bhqp5S4rxbGZ5KDf8bG9kXMW4syRlTlwKjBg0uzTsrNOKZa-UHawHeFm7yRRGp6pDNtPmiqCMoh3oKCz2Rr8x3lbdlE9r7dsuHxUjcWO5s-Ub6jPHN-WJqnka8nOAuD1n7JWMgdjnaeFJXHCGF91QJQgoUTtXtN5qVJFSWEBGjqkSZpRVA66t3CGOTHVSbRsAvqfFXYYKBrkuajuYh4U_DCTKLhSb8X19XM2y8_ptfp-lWkD2GALhbiIwvTY3vTQ";

    let shoe_style = "DM5442-040";
    let shoe = await axios.get(
      `https://api.nike.com/merch/products/v2/?filter=styleColor(${shoe_style})&filter=merchGroup(US)`,
      {
        headers: {
          Authorization: auth,
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
        },
        withCredentials: true,
      }
    );
    shoe = shoe.data.objects[0];
    console.log(util.inspect(shoe, { depth: 5, colors: true }));

    let skus = await axios.get(
      `https://api.nike.com/merch/skus/v2/?filter=productId(${shoe.id})&filter=merchGroup(US)&filter=country(US)`,
      {
        headers: {
          Authorization: auth,
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
        },
        withCredentials: true,
      }
    );
    skus = skus.data.objects;
    console.log(JSON.stringify(skus, null, 2));
    skus = skus.map((s) => {
      return {
        sku_id: s.id,
        gtin: s.gtin,
        stock_keeping_unit_id: s.stockKeepingUnitId,
        size: s.countrySpecifications[0].localizedSize,
      };
    });

    let gtins = await axios.get(
      `https://api.nike.com/deliver/available_gtins/v3/?filter=styleColor(${shoe_style})&filter=merchGroup(US)`,
      {
        headers: {
          Authorization: auth,
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
        },
        withCredentials: true,
      }
    );
    gtins = gtins.data.objects;

    skus = skus.map((s) => {
      let g = gtins.find((d) => {
        return d.gtin == s.gtin;
      });
      if (g) {
        delete g.locationId;
      }
      s = { ...g, ...s };
      s.styleColor = shoe_style;
      return s;
    });
    console.table(skus);

    let cart = await axios.patch(
      `https://api.nike.com/buy/carts/v2/US/NIKE/NIKECOM?modifiers=VALIDATELIMITS,VALIDATEAVAILABILITY`,
      [
        {
          op: "add",
          path: "/items",
          value: {
            itemData: { url: "/launch/t/lebron-9-south-coast" },
            skuId: "a002d46a-b309-57a2-bf27-33bb44f97a1b",
            quantity: 1,
          },
        },
      ],

      {
        headers: {
          Authorization: auth,
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
            'x-kpsdk-ct':'0LjgqXwDZV33jKmuPNZAne9IK7u876kZQGz5qWoEF8JS0WNjhNvC0lWBiiBtYGnSONjvj2NC50Vn9pXoFdUwI9oAQvl9O1qMTOOwU8L5cRGUDACLv9sTlNruwK9rxhCExFkdKyy0HIgK7OMlB1sA4I9Xt',
            "x-nike-caller-id": xNikeCaller,
        },
        withCredentials: true,
      }
    );
    cart = cart.data
    console.log(cart)
    return false;

    a = await axios.get(
      `https://api.nike.com/deliver/available_gtins/v3/?filter=styleColor(${shoe_style})&filter=merchGroup(US)`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZmY4YTAyLWIyZGEtNDhkZC1iOGVjLThhMmM1MGE2YTM0MnNpZyJ9.eyJ0cnVzdCI6MTAwLCJpYXQiOjE2NDMyMzk5MzgsImV4cCI6MTY0MzI0MzUzOCwiaXNzIjoib2F1dGgyYWNjIiwianRpIjoiOTNlNDA2MTEtZjNjYy00ODJjLWJmZjYtYjU5NTExZDY5ODM2IiwibGF0IjoxNjQzMjM5OTM4LCJhdWQiOiJjb20ubmlrZS5kaWdpdGFsIiwic3ViIjoiY29tLm5pa2UuY29tbWVyY2Uuc25rcnMud2ViIiwic2J0IjoibmlrZTphcHAiLCJzY3AiOlsiY29tbWVyY2UiXSwicHJuIjoiZmMyMjE4MzktNzYxZS00Mjg2LTg3N2UtMzY0MjM1NGEwNmM2IiwicHJ0IjoibmlrZTpwbHVzIn0.kgg59QdFBRhqIYrGjNkcomM3Z4tF1lmuvWlrdVIE5K4YINTWYGVbPHR3QMtxy2vjDIkpbeCLbmBOoToO9sHs73LPYj5eFr6zGEOt13u3TeIANBKvGuiBwm78ZJnP-Q1AYsvkwUyVqJlVOrL6dnNG0gh8Wtoq1GYwbrrfe8_ovUpVZNpaxv4zQlRHmWENke3bXChaZhqWp0sbImf-6yBZ6yMEPV2jFAuX68O5PpX0M1Ro8vvj4iOQ29nKRHC32VnwwjYYG_RBvHfj7DrLHJqLBksbwY77lKnw3Q3RZB6msl8Z4PluzN46RVzlBvUvNWQ1vgFjKG0z6aB6_fw6CG9Q7w",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
        },
        withCredentials: true,
      }
    );
    console.log(a.data);
    a = await axios.get(
      "https://api.nike.com/merch/skus/v2/?filter=gtin(00195244797394)&filter=merchGroup(US)&filter=country(US)",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZmY4YTAyLWIyZGEtNDhkZC1iOGVjLThhMmM1MGE2YTM0MnNpZyJ9.eyJ0cnVzdCI6MTAwLCJpYXQiOjE2NDMyMzk5MzgsImV4cCI6MTY0MzI0MzUzOCwiaXNzIjoib2F1dGgyYWNjIiwianRpIjoiOTNlNDA2MTEtZjNjYy00ODJjLWJmZjYtYjU5NTExZDY5ODM2IiwibGF0IjoxNjQzMjM5OTM4LCJhdWQiOiJjb20ubmlrZS5kaWdpdGFsIiwic3ViIjoiY29tLm5pa2UuY29tbWVyY2Uuc25rcnMud2ViIiwic2J0IjoibmlrZTphcHAiLCJzY3AiOlsiY29tbWVyY2UiXSwicHJuIjoiZmMyMjE4MzktNzYxZS00Mjg2LTg3N2UtMzY0MjM1NGEwNmM2IiwicHJ0IjoibmlrZTpwbHVzIn0.kgg59QdFBRhqIYrGjNkcomM3Z4tF1lmuvWlrdVIE5K4YINTWYGVbPHR3QMtxy2vjDIkpbeCLbmBOoToO9sHs73LPYj5eFr6zGEOt13u3TeIANBKvGuiBwm78ZJnP-Q1AYsvkwUyVqJlVOrL6dnNG0gh8Wtoq1GYwbrrfe8_ovUpVZNpaxv4zQlRHmWENke3bXChaZhqWp0sbImf-6yBZ6yMEPV2jFAuX68O5PpX0M1Ro8vvj4iOQ29nKRHC32VnwwjYYG_RBvHfj7DrLHJqLBksbwY77lKnw3Q3RZB6msl8Z4PluzN46RVzlBvUvNWQ1vgFjKG0z6aB6_fw6CG9Q7w",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
        },
        withCredentials: true,
      }
    );
    //   console.log(JSON.stringify(a.data,null,2))

    a = await axios.get(
      "https://api.nike.com/merch/products/v2/526bed4c-4d39-5164-9162-5dc162b05665",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZmY4YTAyLWIyZGEtNDhkZC1iOGVjLThhMmM1MGE2YTM0MnNpZyJ9.eyJ0cnVzdCI6MTAwLCJpYXQiOjE2NDMyMzk5MzgsImV4cCI6MTY0MzI0MzUzOCwiaXNzIjoib2F1dGgyYWNjIiwianRpIjoiOTNlNDA2MTEtZjNjYy00ODJjLWJmZjYtYjU5NTExZDY5ODM2IiwibGF0IjoxNjQzMjM5OTM4LCJhdWQiOiJjb20ubmlrZS5kaWdpdGFsIiwic3ViIjoiY29tLm5pa2UuY29tbWVyY2Uuc25rcnMud2ViIiwic2J0IjoibmlrZTphcHAiLCJzY3AiOlsiY29tbWVyY2UiXSwicHJuIjoiZmMyMjE4MzktNzYxZS00Mjg2LTg3N2UtMzY0MjM1NGEwNmM2IiwicHJ0IjoibmlrZTpwbHVzIn0.kgg59QdFBRhqIYrGjNkcomM3Z4tF1lmuvWlrdVIE5K4YINTWYGVbPHR3QMtxy2vjDIkpbeCLbmBOoToO9sHs73LPYj5eFr6zGEOt13u3TeIANBKvGuiBwm78ZJnP-Q1AYsvkwUyVqJlVOrL6dnNG0gh8Wtoq1GYwbrrfe8_ovUpVZNpaxv4zQlRHmWENke3bXChaZhqWp0sbImf-6yBZ6yMEPV2jFAuX68O5PpX0M1Ro8vvj4iOQ29nKRHC32VnwwjYYG_RBvHfj7DrLHJqLBksbwY77lKnw3Q3RZB6msl8Z4PluzN46RVzlBvUvNWQ1vgFjKG0z6aB6_fw6CG9Q7w",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
        },
        withCredentials: true,
      }
    );
    console.log(JSON.stringify(a.data, null, 2));

    //  let a = await axios.post(
    //   "https://api.nike.com/launch/entries/v2",
    // {
    //     "channel": "SNKRS",
    //     "skuId":'123',
    //     "launchId":'123',
    //     locale:'US'
    // },
    //   {headers:{
    //     "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZmY4YTAyLWIyZGEtNDhkZC1iOGVjLThhMmM1MGE2YTM0MnNpZyJ9.eyJ0cnVzdCI6MTAwLCJpYXQiOjE2NDMyMzk5MzgsImV4cCI6MTY0MzI0MzUzOCwiaXNzIjoib2F1dGgyYWNjIiwianRpIjoiOTNlNDA2MTEtZjNjYy00ODJjLWJmZjYtYjU5NTExZDY5ODM2IiwibGF0IjoxNjQzMjM5OTM4LCJhdWQiOiJjb20ubmlrZS5kaWdpdGFsIiwic3ViIjoiY29tLm5pa2UuY29tbWVyY2Uuc25rcnMud2ViIiwic2J0IjoibmlrZTphcHAiLCJzY3AiOlsiY29tbWVyY2UiXSwicHJuIjoiZmMyMjE4MzktNzYxZS00Mjg2LTg3N2UtMzY0MjM1NGEwNmM2IiwicHJ0IjoibmlrZTpwbHVzIn0.kgg59QdFBRhqIYrGjNkcomM3Z4tF1lmuvWlrdVIE5K4YINTWYGVbPHR3QMtxy2vjDIkpbeCLbmBOoToO9sHs73LPYj5eFr6zGEOt13u3TeIANBKvGuiBwm78ZJnP-Q1AYsvkwUyVqJlVOrL6dnNG0gh8Wtoq1GYwbrrfe8_ovUpVZNpaxv4zQlRHmWENke3bXChaZhqWp0sbImf-6yBZ6yMEPV2jFAuX68O5PpX0M1Ro8vvj4iOQ29nKRHC32VnwwjYYG_RBvHfj7DrLHJqLBksbwY77lKnw3Q3RZB6msl8Z4PluzN46RVzlBvUvNWQ1vgFjKG0z6aB6_fw6CG9Q7w",
    //     "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",

    //   },
    //   withCredentials:true,}
    // );
  } catch (e) {
    // console.log(e);
    console.log(e.response.status);
    console.log(e.response.data);
  }
  // console.log(a.data)
  return false;
  // DC7501-300
  let page = await axios.get(
    "https://www.nike.com/t/zoom-freak-3-basketball-shoes-QXBvM0/DA0694-002?abc=true",
    {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        pragma: "no-cache",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "sec-gpc": "1",
        "upgrade-insecure-requests": "1",
        // "cookie": "AnalysisUserId=23.221.225.236.280751643231914327; feature_tests=as_opt_x_web_test:variation_2; feature_enabled__as_opt_x_web=true; feature_enabled__as_nav_rollout=true; audience_segmentation_performed=true; anonymousId=E10107B3A30467BEB06167CBC768273C; geoloc=cc=US,rc=PA,tp=vhigh,tz=EST,la=39.9524,lo=-75.1642; AKA_A2=A; bm_sz=5E9DAF32706D1EC1784AC13E46D1B3BC~YAAQ7OHdF9g68nt+AQAA2S9BmA6CqWZX7jsJ5RVElvR03l1Vc1kJtm3twRUzJNV//qFi2LmqZShvJvAgOT75ToYxyAlTX0OY0R7/KDe7ZyjaN9uTuMl3zGCp2TiPc9NkzXLFy98Gc2uAGOpcYaCRMlkI5881Gu2NU1hNqq97mmD+TCiI7WQzo1v6NEGay/1EGQMdn5HZUAzx8tMcMtQOmhg546ZjCkkuZ8HhWOQBHZRO3/8Hez67tIgGxA+xJPQswl1dRFkXQ+hvdrxTCzKe04xJ4paSdgT11Dsr4hdzlD0nRHiG7a6DbGZA6nASWLZcjKBNfR+GA5yI/FUsuc0VqwhpwOmcsuh5L2awX80hgIBemFzxfq5EmZMkLBE4/U4UHFiVluY9//rDzdMvr+z55g==~3490871~3556933; AMCV_F0935E09512D2C270A490D4D%40AdobeOrg=1994364360%7CMCMID%7C32144623295702424072694277747221309993%7CMCAID%7CNONE%7CvVersion%7C3.4.0; NIKE_COMMERCE_COUNTRY=US; NIKE_COMMERCE_LANG_LOCALE=en_US; nike_locale=us/en_us; anonymousId=E10107B3A30467BEB06167CBC768273C; slCheck=FJy86KE5W0RS5SFIJIMyHFITKylZIZ1AN8RGae245Dq7C6ajO8oQuQhIkWVyfCTGTGAtYFmJE61e/XLONEjeXNHiuzE5LvQqDMBxeyC/ahlLd/isD2BWQfR3v4y2yGJv; lls=3; llCheck=DLowWElSvPrqB5Dscw52++V2XBH1FGCpFv7C/gG1EjbZEiZ8C4YovKTVCoygKUu8SDGvKSiEIbXnyn3ilwDne0KiJABNU6gAIbrUguqMC2G9vBwn5z8eqfhk7BTQvczMdGi3aRYFZJrj2qMnNO28j3sAc7h/RQOw2elNNCIqs0s=; sls=3; guidS=c559503c-2ab4-4007-f558-337427f34e2d; guidU=f6422671-e7f1-4b5e-d0a7-5674cd5c93e3; ku1-sid=HJsNdXLouGOrHf6qEFnCs; ku1-vid=ace8896e-25a7-707f-2027-9ffbf7249713; RES_TRACKINGID=1636251766223234; RES_SESSIONID=25434261766223234; ResonanceSegment=1; bm_mi=CDE91B5BE6F098ABDE73EDFC8C33A709~gi6TdAK1nXm/NIyPR3ujxGsknGfmENWcv9B8SIMOM4VfDDSi2k0UMCIBJl9mo6rnklyviy45UdIMSZmoG5UOaUcA+94matsO9AKcqA3eftcTStew/B0eGhp1hySQR1y8EgGOfr67gJT/Gl1qjkmhrofQagyHV2wXs1JZTJ/e6NW7UjdLqWd35WvD3ru9pMBu1ESio1z7M31gfTRgQCy2UxH/RpQEuNPmDNXv3aQ+Yk4=; ak_bmsc=971D894BE67DBBBD1DFE0E1132D83F6C~000000000000000000000000000000~YAAQ1kA2F91PIXt+AQAAriFImA7rtmjEYBFXgO263xGra9lSGY5xbi2uksaysQbquTwkeZ0MDKl1lR0JjUKFxaM6yXVWzCWzmL2Hr3iv9c64iVlKh/ZlERFwSEVYJ+EddCXezrxY19c3GbsTDn1XDWepD22XlKkogG0ZOp6FmKF4PmsdVtsBjTxi3zYk986SJEnkXzDNAxqiDVvQFh1aKAAF2AdpEn0JCsFdoOf3qJHX8n0iCOGDSvNZoOBiBmRQzVc+h6LMXCNiML6b7EoZgtB3gP5oDRHhTclB89xm4IYNrfp4GyZB2O0OJ3vJd0dNWGgqnvBczNfVfVD9BWhYP3fVUbspaXz6EqJ512JmUY6Gu5T/Hz2IR59JiiAxzPriFQOjmpsy96FK7vDWvFAfXefNsu+kv3H6Ht5dokvNHWjowGkvUQY9TQ==; ppd=cart|nikecom>cart>view; forterToken=2633caefe4214dd39877f0d13ffaa783_1643233124706_4207_UAL9_11ck; bm_sv=19F4FA545BA06EEA7161FA8777B3BB7C~5Iw6PE+EmUmqbi7QOTbbqcDovJIVsWRRsJ5t8FbUAXkwdYXwXQb9tihS256H7VtLYi8aayjqMRE8HReU7Wc/eisRhnRAMmj7Vjf2A0Uqq150bmGOL3iL3thCwMISXyJZB+F+k7Kgh6N5Hn1DXropRGdrrJXh8bMPZcMYeuOYgKk=; _abck=6A15EEB0E5A88F486036670879F9FBA3~-1~YAAQ5+HdF9kOdXJ+AQAAh9xdmAdjiaAA9vN3t9Wi8WHbI49qA0juTxLsGpGyfiN90mDSCGOMLvCyOk0x68qwJJHTdtOmgu8VftnjIRAQZDarVtHOb+PNi/uvt8+J/oMm5tSoUGVGjXKtFlbLWVMN3Fl851bHYom2GcJ+emJRJM5eOu7eqMKkE6IAG62yQTsTPj7br6S4S0+C9u//p+TWwB0YCfJAuaXKKx1xwmxAT/Ym5FJjV/k1HXFBVQBFRGB/2Odhf+FqPHNtBLlw62hwHohVT+UECR/wTRYvr27nP6RKil9LxagwFB74SxJQqO937zGs0g8bMePOtGHPijWhHvcgZhfUa3/sJy14SKjnJKZFZ7z2pFtksSr01BEste2BA/daT5JVkmL+ZjM0wKUOKSdFgBHWfIQllInaKAZIk6MSd+sX4WVhl7gQapegmtFZAwHiey44tRz7aT/6aTHXZAzogbw+mkgFr1GkI626wOnUd0mJoehJrpZCHkMgsIU=~-1~-1~-1",
        Referer: "https://www.nike.com/w/new-mens-3n82yznik1",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
    }
  );

  // fs.writeFileSync('response.json',JSON.stringify(page.data))
  page = page.data;
  // let page = JSON.parse(fs.readFileSync('response.json'))

  let re = new RegExp(
    'INITIAL_REDUX_STATE=(?<aa>.+language":"en"}}});</script>'
  );
  let res = page.match(re);
  let state = JSON.parse(res.groups.aa);
  delete state.localization;
  delete state.reviews;

  let shoes = state.Threads.products;
  // console.log(JSON.stringify(shoes,null,2))
  let options = Object.values(shoes).map((s) => {
    return {
      title: s.fullTitle,
      color: s.colorDescription,
      state: s.state,
    };
  });
  console.table(options);
  // console.log(JSON.stringify(shoes,null,2))
};

run();

// fetch("https://www.nike.com/t/zoom-freak-3-basketball-shoes-QXBvM0/DA0694-002", {
//   "headers": ,
//   "body": null,
//   "method": "GET"
// });
