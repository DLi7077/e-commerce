const items = [
  {
    name: "Wax Pomade Size 2.5 oz | Lightweight Hair Pomade & Paraben Free | Public Goods",
    price: 9.25,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOl-awwe-VxvVI2azd22tmwHXLuyJ8Na8wAiwPnmZjaD8cczw-K5cuMobf6xYeFjWuR9p4g375jNk8KXEMPRKQ8WGHJO0IwDzQs1hzHF7CeB00YLLRhyWekw&usqp=CAE",
    brand: "Public Goods",
    reviews: 16,
    rating: 4,
  },
  {
    name: "Sonny's Original Surf Paste, Texturizing Hair Paste | Sun Bum",
    price: 16.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSMGNg9IV3uLcenrp8e66qky7gsQSDCyxGDaLdKGMvC0SfRTx4VLCqMvyPbtw-784g25dwIGcX_NLi2tdfnBPAOs93ki_U9wLSKNCCra9U2LfYoNBkjsDYC1g&usqp=CAE",
    brand: "Sun Bum",
    reviews: 161,
    rating: 5,
  },
  {
    name: "Jack Henry Clay Pomade - 48 Hour Hold - Award Winning Product - Real Matte Finish",
    price: 28,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRZgnxjoF-q5SIH3uY8Nu3utPg72EAuF3WvSk5U61I014gFbpjp4RH0fKhKVD720bK9NqVoY54ZyOtDhBaicWGblOfs1WvvtSTKkuoWWWfPgJ_H3tQbnoeYqw&usqp=CAE",
    brand: "jackhenry.co",
    reviews: 923,
    rating: 5,
  },
  {
    name: "shu uemura Ishi Sculpt Texturizing & Sculpting Hair Paste 2.5 oz/ 71 g",
    price: 45,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhWVwJHEqhTRs3MY0TO5f7I89UqJPP0kMiJEfUL9o6bTCthKA8hQuHXJXMQqInRJyJKkTZn4UV0AuzPOZMENHLVamN6XcjFUMHE71LK1fkf1c3H8TWQsLVBw&usqp=CAE",
    brand: "Sephora",
    reviews: 144,
    rating: 4.5,
  },
  {
    name: "Men's Hair Putty - Strong Hold & Low Shine | Pete & Pedro 2 oz. $20",
    price: 20,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTP3hFCVFm5DHG8zlND9ct4tO58zcl4XZtNwOTPJT3oEhr7Tca6RhfPDQwwIy3ELSeZJhK9MfMY33m-Dy4qi8dkJ6V-ZhYuxG70wYXt9I2qbpTeU_VSQbJGrg&usqp=CAE",
    brand: "Pete & Pedro",
    reviews: 3,
    rating: 4.5,
  },
  {
    name: "Sweet Tobacco Hair Wax | 18.21 Man Made",
    price: 25,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRiPriSLoc3p4r5q2iDEfb1DM4eE2V6eZX3Bvf26c5pJs1s_Gfx2rXL5CIZHO9r5hLs1woDqLgdiZb6h2fQK9WCSFJ_7ukK9D4DLAW_zx-J5th_7dyQj7Qa&usqp=CAE",
    brand: "1821 Man Made",
    reviews: 52,
    rating: 5,
  },
  {
    name: "Mademoiselle Pink Polymer-Based Film Hard Wax Beads - 1.85 lbs",
    price: 55,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR4M7yb-RQLuuZGgdJ3E0J3aGSQXeCI0_6Ut3E2ck6O8RrRky2ZWyhVCyiNRV1z3uAq3gseFyzwrMSXXciuJkwUHTJ7sEdJf9ARmCAY9FRmqIs3uoWpFLTEV6A&usqp=CAE",
    brand: "Miss Cire",
    reviews: 97,
    rating: 4.5,
  },
  {
    name: "Hair Wax For Men Premium Barber Grade Hair Styling Sculpting Clay, High Hold, Matte Finish,Temu",
    price: 3.59,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTznalWwHxLdl7T4UHB_VlLTY3MTepzG1RHdaYcHm29e27OvpB3ry4qMNZy2x54sOtdqadlRTLGqpV1X7N1k0x-l57zWgaPE8pWynsl58UgX_0Dxa3gaTNd&usqp=CAE",
    brand: "Temu",
    reviews: 12,
    rating: 5,
  },
  {
    name: "Hairstory | Wax",
    price: 29,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8Y2e1WRRyJKxV4UR1VUj9oAwRCp0udqeDux7sOXBEhjH4mUmq6Byph-a9k8ehtzqxufmKD1l_nOU0b-w0zcquHDeNgs0mvMJZmO_3yaTbglhXZNWevwB4vQ&usqp=CAE",
    brand: "Hairstory",
    reviews: 5,
    rating: 3.5,
  },
  {
    name: "OUAI Matte Pomade - Anti Frizz Hair Smoothing Cream",
    price: 26,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQm5mHwvgIsZAJUhAhLLTYGfTsEtqi1Ws8NtWUN2e4BXxgiRaR9XW92XupQVtCT18p0TvTtU43Ws_BOcl6HadRD29mJPbJp-R96gD5OVyJoNUrB1uFbyJC2nQ&usqp=CAE",
    brand: "OUAI Official Site",
    reviews: 546,
    rating: 4,
  },
  {
    name: "Uppercut Deluxe Deluxe Pomade",
    price: 20,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQKZu7bmXzSQ3dNQr__nngZ05TbNrHgW99IRwiJFgiyxuui8fI8fF6KXhOJBSFf-YcgmtGyL4AT0IIxyiihfMqLa7wt2u_qkxAmGyagSJzGEbt7bK0LPHU2Ig&usqp=CAE",
    brand: "Uppercut Deluxe US",
    reviews: 1,
    rating: 5,
  },
  {
    name: "Kérastase Genesis Homme Light-Hold Styling Wax Pomade",
    price: 45,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRwktNB2G6jQJp1dgwlJoDjMJgHx6_b24c0BMMhmELDhHYqPIaCxHi4X_wR5bJ23tzGgo-iRlnGnNYe6V_cbvh5x1E2gYeyr1MHp_bDL5IvASeiNRuME-Z&usqp=CAE",
    brand: "Sephora",
    reviews: 613,
    rating: 4.5,
  },
  {
    name: "Shu Uemura - Ishi Sculpt Hair Pomade - 75 ml",
    price: 45,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLInRQRI75GDxMtjs5-cnCZCDvZOQYcDJwsyoenAFQ4OBva7ljiFQ8T6Az3q8nViyq2vHoPun4FuO4sIAD9oZZB7UWE_RIXOtloo-4AcT94VkT6BBF0U32hww&usqp=CAE",
    brand: "Shu Uemura Art Of Hair",
    reviews: 144,
    rating: 4.5,
  },
  {
    name: "Soft Clay Pomade",
    price: 30,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6y-KyzsqCtG-aM8TweT_CIrsqG1EIiU2AyWr5f854-JBwVc4ZGzOgENQLeSU-D_m0Q3NQ5RbSxymj5EplcC0OPfI2E3tCqp0aUwCISk5vm-NQLyDEC9OR&usqp=CAE",
    brand: "Barb",
    reviews: 478,
    rating: 5,
  },
  {
    name: "Matte - No Shine Hair Paste 4 oz",
    price: 15.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGbKLy7yYKA2dWW3nJCw8LLOfSZs5EXSvfuiq4ZyLrD-qwL5VVFfg9A0CrgdOY4aYvax3u2tJvwL_OSnqh1-xKlB0XJaM0FcdGbC4VVPQhsAFBW1rmBB23&usqp=CAE",
    brand: "Pacinos Signature",
    reviews: 197,
    rating: 4.5,
  },
  {
    name: "O'Douds Dry Wax",
    price: 25,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvNkPdDEOLSQnfx0Td3tcLfwh1EON8ORUGE2bbZJiMbwtr0qDZu4YZOcFykGV74mJ0m97xE6UI3SJGHWX35Ws5wag0IXMAaIr9URU4LMggs0pH-o5SHY3b&usqp=CAE",
    brand: "FleekFellows",
    reviews: 134,
    rating: 4.5,
  },
  {
    name: "Hair Paste (2 oz) | John Masters Organics",
    price: 24,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-_gTJYCZF0Swr1Xmdo3CWC103oRTuctGhDielh64U-JwfKPQiZmwkyPPKui5I6mJc9pa9zSF9s5jwIDaeCUST3MIBeZTkcvLxiyuUE8vkLdiSkkU3q-OAM2uz&usqp=CAE",
    brand: "John Masters Organics",
    reviews: 56,
    rating: 4.5,
  },
  {
    name: "Anastasia Beverly Hills Brow Freeze Extreme Hold Laminated-Look Sculpting Wax Clear 0.28 oz/ 8 g",
    price: 23,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIUMKvcAYRKJVgwZUykudg9ZrnxdUhhBmeDDibdUwcsGRS3W1g7mpRKEx67W5DfPYQxSx_ilDl7WX0BqWtXTQZLieNm95iau5OE4ficFkvo9O3CfcFFw3a&usqp=CAE",
    brand: "Sephora",
    reviews: 6,
    rating: 4,
  },
  {
    name: "Men's Hair Putty - Strong Hold & Low Shine | Pete & Pedro 4 oz. XL $35 (Save 14%+)",
    price: 35,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTP3hFCVFm5DHG8zlND9ct4tO58zcl4XZtNwOTPJT3oEhr7Tca6RhfPDQwwIy3ELSeZJhK9MfMY33m-Dy4qi8dkJ6V-ZhYuxG70wYXt9I2qbpTeU_VSQbJGrg&usqp=CAE",
    brand: "Pete & Pedro",
    reviews: 2,
    rating: 4.5,
  },
  {
    name: "OUAI Matte Pomade 1.7 oz/ 50 mL",
    price: 26,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTBKJIT9vsx4PaNbXnY0tMWcthM-G3gXv643oxfweMv0AF6QFFXT9LOB1LeHv9Q0Up1IgKtReFGfCUk1GPnVRHZ7FF8fCD9fm8wn6iBdseA5PfCxg6ON_8a&usqp=CAE",
    brand: "Sephora",
    reviews: 546,
    rating: 4,
  },
  {
    name: "Texture Clay",
    price: 30,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQw3m8eHR6uJsNBsVN8ggFunleBFWQY9k3z9EwB9sv44kYw1I9hkdzc4Z3n6-WHoasVEK41Z-2LCnEW__KTj2JflgebWaN2gLm7Tv_Av7pFnW0-jZvKmkyUR9A&usqp=CAE",
    brand: "Moroccanoil",
    reviews: 281,
    rating: 4.5,
  },
  {
    name: "Color Hair Wax | Temporary Hair Color | Ashley Lee Cosmetics Box Set (Pack of 10)",
    price: 45,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSlfb16nwnH28Qbanm9J-ti_BKZpEPOECc9PsMb1ED0IP7u3qQKeKVHiZYuTtyMcb1aH0em1hUbTzqjO-nmbsCv086Wz4pJozjDNlMZcLDGxhm10V755cYS&usqp=CAE",
    brand: "Ashley Lee Cosmetics",
    reviews: 388,
    rating: 5,
  },
  {
    name: "PATTERN by Tracee Ellis Ross Edge Control 4 oz/ 118.3 mL",
    price: 12,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQTQeXFGZ6XeDxYPGthPMPQRicy3n2c57waGjuMFN159Ggex0JDwYou6yQa3ZVDKOh7OO5_ldvYYCBd5SZZDsU5x17vOJ0JAC_6XP8leRTSUTnCt7QXVWsZIA&usqp=CAE",
    brand: "Sephora",
    reviews: 664,
    rating: 4.5,
  },
  {
    name: "Matte - No Shine Hair Paste - 4 oz",
    price: 15.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGbKLy7yYKA2dWW3nJCw8LLOfSZs5EXSvfuiq4ZyLrD-qwL5VVFfg9A0CrgdOY4aYvax3u2tJvwL_OSnqh1-xKlB0XJaM0FcdGbC4VVPQhsAFBW1rmBB23&usqp=CAE",
    brand: "Pacinos Signature",
    reviews: 197,
    rating: 4.5,
  },
  {
    name: "MALIN+GOETZ hair pomade.",
    price: 26,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQFXTC5y2L4RG4j7O0COXAUEathZcFlf-fHhYQP1ckolI5tKJxeyZXAYsxZxjpg9Lg16LmN3acTBE0KZTN5k-ItacQF6GfoFydGVDZ9lfQZ9X8Q5XfXTCvfUQ&usqp=CAE",
    brand: "Malin+Goetz",
    reviews: 60,
    rating: 4.5,
  },
  {
    name: "Uppercut Deluxe Matte Pomade",
    price: 20,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTbqwrxiRZoedbJv8EUs_jTzrfXx0OSpfxcEsMjVbOZBc_SxmmLQSlp2lgoxzWh2zANCCpbFu8GpOMYuIzIb5KrT9VSZB2RLbx1nsmVRU8tfkFxpCBXeWAe_A&usqp=CAE",
    brand: "Uppercut Deluxe US",
    reviews: 1,
    rating: 4.5,
  },
  {
    name: "Suavecito | Original Hold Pomade Original | Standard | 4 oz",
    price: 12.99,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSO2ASXVAfqM0o1CFOovCuD2RMzUjAsILS2KB1xNfBWnP3wXuQ6tK6aUGJr_thU5jgAJSr4uOfSY6h2EjO9y7o85pULzUE3THpMJ_KYbUzWfxA2w5o5JNAz1A&usqp=CAE",
    brand: "Suavecito",
    reviews: 6,
    rating: 4.5,
  },
  {
    name: "Men's Hair Clay Hair Wax, Long-lasting Styling Spray Clear Matte Hair Clay, Natural Fluffy, Moisturizing Hair Gel Dry Gel Men's Hair Styling,",
    price: 4.94,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSn8en6Tgi41JXfTxZP2SrNann3vUFZ2gRiyOTkHObx_LD1Hj11mwx0sGQbSWxB25LaF6AAvWEyxYigW8kY0m3vNdkfxUtPWQmqIHSIISTLClUAUkX_EoGRpw&usqp=CAE",
    brand: "Temu",
    reviews: 4,
    rating: 4.5,
  },
  {
    name: "Johnny Slicks - Organic Oil Based Pomade Original",
    price: 20,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPnatpT6eYqO_QuUQ9jimbigvFTwLaOoIcx6kO-7ApxPVjj8ATdApY75BUinF_80KxNOEwE08BY-RJzsL-JX7K1AZ4b_uQWl5XG-fi9jzIDLNWEJXoNE6RijA&usqp=CAE",
    brand: "Johnny Slicks",
    reviews: 1,
    rating: 5,
  },
  {
    name: "Paul Mitchell Dry Wax | 1.8 oz",
    price: 21.5,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNmdkIyk6g0iB5YQ_q8tasbgH4cYCgpbF4RdvJB_7XH8wRkZGf6Mg2hw5V9t4sz53T9plduTPXjIe72qZobsThtK9w8VvYXSK8Z4_hGwgVILIjuf03X-zl7ODy&usqp=CAE",
    brand: "John Paul Mitchell Systems",
    reviews: 1,
    rating: 4.5,
  },
  {
    name: "Glossier Boy Brow Volumizing Eyebrow Gel-Pomade Black 0.11 oz / 3.12 g",
    price: 17,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShpqGM3QldlB76ZEfqXIk-pbDEFwY-7Cr3IEqPUCUC4YWVSCV2k163iyuQKcwBYmuoF4d4hTCawxao09zMH59ozBckPOWqZUA-Jz631alc_MTdW_h_HcUNQg&usqp=CAE",
    brand: "Sephora",
    reviews: 2,
    rating: 4.5,
  },
  {
    name: "Kérastase - Cire d'Épaisseur Texturisante Wax Pomade - 75 ml",
    price: 45,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREOwHLtvwMRwLI_fMnhSdOaHA7nxe_2ghHKD-I-c7NgmB32sTY_Gb9jZa2LLGNH63gkRrtSyVciyORuG3tvxTg6edVJMA64ElXAZyva6iuIjoSLXW-tfH402I&usqp=CAE",
    brand: "Kerastase",
    reviews: 613,
    rating: 4.5,
  },
  {
    name: "Glacial Clay Pomade",
    price: 27,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMTRAZMftqkk78ktZL0lClbLV6Uayo_YXdzHJOf38d3WiG8awhg3bLgX_UIQyDwujS-INFEKLumyxF1kC5MWa-qKcmovtdW8guuiIOlKUnfEX4bwY4fUSB4H8&usqp=CAE",
    brand: "Highland Style Co.",
    reviews: 80,
    rating: 5,
  },
  {
    name: "Philip B. Luxe Wax",
    price: 42,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmRUjlGD8iGdsp__hruUMcyr4naqndhI9McTkXvA8PkCY8wT_K9uurYV3Wl4z20LE5yzKSRXz9iJdDP6U-0X-oPIRANzxb1Ee1yVb2h0wM4fBnZHZrbKZVWRk&usqp=CAE",
    brand: "Philip B.",
    reviews: 4,
    rating: 5,
  },
];

/*
webscraped using
const items = [...document.querySelectorAll('.KZmu8e')]
console.table(items.map(item=>{
    const image_url = item.querySelector('img').src;
    const text = item.innerText;
    const [name, priceThing, brand, reviewThing, ratingThing] = text.split('\n');
    if(!ratingThing || !ratingThing.includes('stars')) return {}
    const price = parseFloat(priceThing.slice(1))
    const rating = parseFloat(ratingThing.split(' '));
    const reviews = parseInt(reviewThing.slice(1,-1));
    return {name, price, image_url, brand, reviews, rating}
}).filter(item=>item.name))
*/