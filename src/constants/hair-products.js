const HAIR_PRODUCTS = [
  {
    name: "Wax Pomade Size 2.5 oz | Lightweight Hair Pomade & Paraben Free | Public Goods",
    price: 9.25,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOl-awwe-VxvVI2azd22tmwHXLuyJ8Na8wAiwPnmZjaD8cczw-K5cuMobf6xYeFjWuR9p4g375jNk8KXEMPRKQ8WGHJO0IwDzQs1hzHF7CeB00YLLRhyWekw&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABABGgJ5bQ&sig=AOD64_19lUzQy5Hw3ovzeIa1zNGP9YeYgg&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8I6xM&adurl=",
    brand: "Public Goods",
    reviews: 16,
    rating: 4,
  },
  {
    name: "Men's Hair Putty - Strong Hold & Low Shine | Pete & Pedro 4 oz. XL $35 (Save 14%+)",
    price: 35,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTP3hFCVFm5DHG8zlND9ct4tO58zcl4XZtNwOTPJT3oEhr7Tca6RhfPDQwwIy3ELSeZJhK9MfMY33m-Dy4qi8dkJ6V-ZhYuxG70wYXt9I2qbpTeU_VSQbJGrg&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABADGgJ5bQ&sig=AOD64_3JfU7cjV3oipmqkmVyokxzE-sxzg&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8I7hM&adurl=",
    brand: "Pete & Pedro",
    reviews: 2,
    rating: 4.5,
  },
  {
    name: "Huron Hair Styler | Best Pomade For Men | Vegan, Cruelty-Free Hair Cream For Men From Huron",
    price: 20,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDtMxvf07zhyiQ5mVaaPlAvsi2WZ6bEuM2O32T6fGZn5iV_YCogFcoowSIewBV7icTyUlD1A8sPI2sfQNXvk9YbyEhwF3_RaYqa0bZeizjhqTPwNC86b9kGfl0&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAFGgJ5bQ&sig=AOD64_0d6DQHxG6L3W6UMxgkDlJeUdagbg&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8I8RM&adurl=",
    brand: "Huron",
    reviews: 144,
    rating: 5,
  },
  {
    name: "Aveda men pure-formance grooming clay - 2.5 fl oz/75 ml",
    price: 32,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTQmCJeVEDtEJ_qnr6yg7k40VFd9ajz1-3PYsTd-gwi5heuyb8mz1Zgkur6L_UXGAi2ljKc5rpUVnkPL9wzHr7hvpZ2UyLHTC_BjJztB6WXg2fc97fTIaOYPA&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAHGgJ5bQ&sig=AOD64_2PW7J2n3hOxu5ZXRFkpqWnEFjuBQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8I9RM&adurl=",
    brand: "Aveda",
    reviews: 1,
    rating: 4.5,
  },
  {
    name: "Hairstory | Wax",
    price: 29,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8Y2e1WRRyJKxV4UR1VUj9oAwRCp0udqeDux7sOXBEhjH4mUmq6Byph-a9k8ehtzqxufmKD1l_nOU0b-w0zcquHDeNgs0mvMJZmO_3yaTbglhXZNWevwB4vQ&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAKGgJ5bQ&sig=AOD64_0HKTNjhXmOYQaK2WyOuTGXpZUB2w&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8I_BM&adurl=",
    brand: "Hairstory",
    reviews: 5,
    rating: 3.5,
  },
  {
    name: "Jack Henry Clay Pomade - 48 Hour Hold - Award Winning Product - Real Matte Finish",
    price: 28,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRZgnxjoF-q5SIH3uY8Nu3utPg72EAuF3WvSk5U61I014gFbpjp4RH0fKhKVD720bK9NqVoY54ZyOtDhBaicWGblOfs1WvvtSTKkuoWWWfPgJ_H3tQbnoeYqw&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAOGgJ5bQ&sig=AOD64_0i6WPZYiRGKva1BULfTrE8CJgjDw&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IghQ&adurl=",
    brand: "jackhenry.co",
    reviews: 925,
    rating: 5,
  },
  {
    name: "Thickest looking hair on Earth, Much better than hair fibers, For Men & Women, DermMatch Topical Shading (Black)",
    price: 47,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwaX-JpnbuQu_lCgkbar3YJppTG9cse3JEgZ5Qo-MD6ZcF1DEdbbCCd6B1OGg778Vapux66XHO2a1f_w8hIC6vE_HoX3LhNIb9S13u7Jqf&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABASGgJ5bQ&sig=AOD64_1H-j9wnt0D_okbEULCVjxnB3mQrg&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IhxQ&adurl=",
    brand: "DermMatch",
    reviews: 2,
    rating: 4.5,
  },
  {
    name: "Sweet Tobacco Hair Wax | 18.21 Man Made",
    price: 25,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRiPriSLoc3p4r5q2iDEfb1DM4eE2V6eZX3Bvf26c5pJs1s_Gfx2rXL5CIZHO9r5hLs1woDqLgdiZb6h2fQK9WCSFJ_7ukK9D4DLAW_zx-J5th_7dyQj7Qa&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAUGgJ5bQ&sig=AOD64_1WH_BEvs26G4jKc56vJNdjozga_Q&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IihQ&adurl=",
    brand: "1821 Man Made",
    reviews: 52,
    rating: 5,
  },
  {
    name: "Uppercut Deluxe Deluxe Pomade",
    price: 20,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQKZu7bmXzSQ3dNQr__nngZ05TbNrHgW99IRwiJFgiyxuui8fI8fF6KXhOJBSFf-YcgmtGyL4AT0IIxyiihfMqLa7wt2u_qkxAmGyagSJzGEbt7bK0LPHU2Ig&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAWGgJ5bQ&sig=AOD64_0g0KKK7YoAQoYttPDkLTMpz0uKpQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IjRQ&adurl=",
    brand: "Uppercut Deluxe US",
    reviews: 1,
    rating: 5,
  },
  {
    name: "Sonny's Original Surf Paste, Texturizing Hair Paste | Sun Bum",
    price: 16.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSMGNg9IV3uLcenrp8e66qky7gsQSDCyxGDaLdKGMvC0SfRTx4VLCqMvyPbtw-784g25dwIGcX_NLi2tdfnBPAOs93ki_U9wLSKNCCra9U2LfYoNBkjsDYC1g&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAeGgJ5bQ&sig=AOD64_0OiYY5JtICAspGrkCdkqXY_MiEIQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8ImhQ&adurl=",
    brand: "Sun Bum",
    reviews: 160,
    rating: 5,
  },
  {
    name: "Men's Hair Clay - Extreme Hold, Matte Finish - Adds Volume & Texture - For Medium, Thick Hair Type | Forte Series",
    price: 22.95,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgKPyCuirDpC6Y-VjMl5jKja_V9awZgJdHVF6svt8vAeIK_XghsbSR8Ee6trhGI7o2izxKOc_U6kiU9fG_s9VUiNiRYRPXbUGGHmC9WJwQ8SVpRSH-osrMWxg&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAgGgJ5bQ&sig=AOD64_27x3FwKiDCiL6yofkOec_Qv2154Q&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8InRQ&adurl=",
    brand: "Forte Series",
    reviews: 263,
    rating: 5,
  },
  {
    name: "Uppercut Deluxe Stock Up Bundle - Deluxe Pomade",
    price: 50,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRye6HFLWo1nBrgquzvOnxlV68P_NUGeFXFyTcY53t1nVhmTjdsdP1EgINnOTNo3XL_awKoe_x6F4l31XjAwv2fRXQ3rt0PvQKznmsA-ezSXGzcWJsW0Mobkw&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAiGgJ5bQ&sig=AOD64_2hrgpJ_2ceAaNbIi32roYyxImMFg&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IoRQ&adurl=",
    brand: "Uppercut Deluxe US",
    reviews: 432,
    rating: 5,
  },
  {
    name: "The Hair Shaping Wax from GK Hair | For a Workable Hold",
    price: 22,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSEljCT29hEaH9BfMGR6JriPDJoPJVO0t_k-QuCEjSRifnMtLGOOX9Vnc14bdzvOosFbeSNAHXPkhQkpzWe7yyG8etC6fOwqnfx8388C2E&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAkGgJ5bQ&sig=AOD64_0c7zpw32EvLh0P4_5n4LbMNVqKBQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IpRQ&adurl=",
    brand: "GK Hair",
    reviews: 2,
    rating: 5,
  },
  {
    name: "Suavecito | Original Hold Pomade Original | Standard | 4 oz",
    price: 12.99,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSO2ASXVAfqM0o1CFOovCuD2RMzUjAsILS2KB1xNfBWnP3wXuQ6tK6aUGJr_thU5jgAJSr4uOfSY6h2EjO9y7o85pULzUE3THpMJ_KYbUzWfxA2w5o5JNAz1A&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAnGgJ5bQ&sig=AOD64_3UEr4ZGtXMRmsBCLZ57zYxVmyOig&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IrBQ&adurl=",
    brand: "Suavecito",
    reviews: 7,
    rating: 4.5,
  },
  {
    name: "Athena Club | Wax Strip Kit for Face",
    price: 10,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSY1B7ujWoMNigbKsqkzdbE4-7ikQa_Qd8kCuWR_05fesQ2PU_iZL-UJY_nW6jHHIoLH12kvUI0ZJtEannzEkFu-BV77Z7SdQGt6jDTslkELmI2_oaU861O&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABArGgJ5bQ&sig=AOD64_0q5fS0ZPm6HWyRe2DLM_P-g1pNeg&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IshQ&adurl=",
    brand: "Athena Club",
    reviews: 25,
    rating: 4,
  },
  {
    name: "OUAI Matte Pomade - Anti Frizz Hair Smoothing Cream",
    price: 26,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQm5mHwvgIsZAJUhAhLLTYGfTsEtqi1Ws8NtWUN2e4BXxgiRaR9XW92XupQVtCT18p0TvTtU43Ws_BOcl6HadRD29mJPbJp-R96gD5OVyJoNUrB1uFbyJC2nQ&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAvGgJ5bQ&sig=AOD64_1mb9WUj_ZnTFDdV1PMAvipD1cP4A&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8ItxQ&adurl=",
    brand: "OUAI Official Site",
    reviews: 554,
    rating: 4,
  },
  {
    name: "Shu Uemura - Nendo Definer Hair Pomade - 75 ml",
    price: 45,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQSjXh54vaq2ntt3fZv0HbNvXj6wIm-wLfe0H5L_Gn2bJELGrH6g-rN1DkGrFESo52Yc8l92htvo-Z8NiCCyNq6sbiJyeEq7aZIPToz9AfWXM6AvuNZ8xH203c&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABAxGgJ5bQ&sig=AOD64_3bdaBUlp3ntI4vNXGQYG2B9LAMJg&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IuhQ&adurl=",
    brand: "Shu Uemura Art Of Hair",
    reviews: 97,
    rating: 5,
  },
  {
    name: "Hair Wax For Men Premium Barber Grade Hair Styling Sculpting Clay, High Hold, Matte Finish,Temu",
    price: 3.59,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTznalWwHxLdl7T4UHB_VlLTY3MTepzG1RHdaYcHm29e27OvpB3ry4qMNZy2x54sOtdqadlRTLGqpV1X7N1k0x-l57zWgaPE8pWynsl58UgX_0Dxa3gaTNd&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABA2GgJ5bQ&sig=AOD64_0-Ki76f_vQPoUuFfEwREf9Wj1RyA&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IwxQ&adurl=",
    brand: "Temu",
    reviews: 14,
    rating: 5,
  },
  {
    name: "Simpler & Safer Hair & Beard Dye For Men, Light Brown",
    price: 45,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTyMloDv8CRSdJsqtkLcec57vKT3O8s-9YmT0GgNJ2AEVtgknXDoUcXltxoKU6_BjK8GWTntUOSY7lU_Px4Ygre2834DpBD8GATYb5oUbuag3ySDGMXp8Qc&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABA4GgJ5bQ&sig=AOD64_2W4yL4Ppt23tiU_dO_o-y8hj1MyQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IxxQ&adurl=",
    brand: "Simpler Hair Color",
    reviews: 4,
    rating: 4.5,
  },
  {
    name: "Glacial Clay Pomade",
    price: 27,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMTRAZMftqkk78ktZL0lClbLV6Uayo_YXdzHJOf38d3WiG8awhg3bLgX_UIQyDwujS-INFEKLumyxF1kC5MWa-qKcmovtdW8guuiIOlKUnfEX4bwY4fUSB4H8&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABA6GgJ5bQ&sig=AOD64_0YphDRFihnu0iuEeA6rwYjW86KYg&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IyxQ&adurl=",
    brand: "Highland Style Co.",
    reviews: 83,
    rating: 5,
  },
  {
    name: "Men's Sea Salt Spray for Hair & Beard - Old Money - 4 oz - Best Natural Sea Salt Spray for Beach Hair Texture & Volume - Beardbrand",
    price: 17,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ70uRFSWINJcNnJDcRUfugRyZCl_wuBD96_cYpfhgBopNyZbAqhbE8EOcN5uB-8bH4iXGpo5DEpMNucmD49gr2mGsY6SVD-7UqHReR011ehxkeUL2YVodECag&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABA8GgJ5bQ&sig=AOD64_1_6eamnaXzI9ZCLA696OKSQy7y8Q&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8IzxQ&adurl=",
    brand: "Beardbrand",
    reviews: 807,
    rating: 4.5,
  },
  {
    name: "Bevel 2-in-1 Pomade",
    price: 11.95,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSB-Ow_ImCvFGHfSp8oyq_EgheE4SyW_TZS-mXjM-AjIk4S8nfzxJGI6eAxQmsS194w_gEVOwVOHV8TdWtBi41sIlT3SmFnyjxqMWTQMhV9_GjI30WM_xc52O5Y&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBFGgJ5bQ&sig=AOD64_39Rl6KZIYaQa_dmgxaOFRUcMsVdA&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8I3xQ&adurl=",
    brand: "Bevel",
    reviews: 360,
    rating: 5,
  },
  {
    name: "shu uemura Ishi Sculpt Texturizing & Sculpting Hair Paste 2.5 oz/ 71 g",
    price: 45,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhWVwJHEqhTRs3MY0TO5f7I89UqJPP0kMiJEfUL9o6bTCthKA8hQuHXJXMQqInRJyJKkTZn4UV0AuzPOZMENHLVamN6XcjFUMHE71LK1fkf1c3H8TWQsLVBw&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBHGgJ5bQ&sig=AOD64_0LHOAHlvb-Oe2ss49AkT1tdK7KEA&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8I4xQ&adurl=",
    brand: "Sephora",
    reviews: 144,
    rating: 4.5,
  },
  {
    name: "Schwarzkopf Osis+ Flexwax 1.7oz",
    price: 23.3,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRu120kj-S5N4Vgwch1HgUk11eCXYlU_vfH5hBgWRd6wkPqVYVhyVlCK6NuFzoD8uHFaHJu-I9pmRFFi6EGBsfPjT4sf_msX7POulnB4g4ACS_-TyVcg11y6A&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBLGgJ5bQ&sig=AOD64_10BjQ0oeI064DNlw6jJ3C5KAnygA&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8I6RQ&adurl=",
    brand: "The Warehouse Salon",
    reviews: 1,
    rating: 4.5,
  },
  {
    name: "Uppercut Deluxe Matte Pomade",
    price: 20,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTbqwrxiRZoedbJv8EUs_jTzrfXx0OSpfxcEsMjVbOZBc_SxmmLQSlp2lgoxzWh2zANCCpbFu8GpOMYuIzIb5KrT9VSZB2RLbx1nsmVRU8tfkFxpCBXeWAe_A&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBNGgJ5bQ&sig=AOD64_2merZIN_Vfg6tb75pSVNXwOy8mlQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8I7RQ&adurl=",
    brand: "Uppercut Deluxe US",
    reviews: 1,
    rating: 4.5,
  },
  {
    name: "Philip B. Luxe Wax",
    price: 42,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmRUjlGD8iGdsp__hruUMcyr4naqndhI9McTkXvA8PkCY8wT_K9uurYV3Wl4z20LE5yzKSRXz9iJdDP6U-0X-oPIRANzxb1Ee1yVb2h0wM4fBnZHZrbKZVWRk&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBPGgJ5bQ&sig=AOD64_3m3MOyl07mCFgQ59G3b2Y2sGzw_g&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8I8BQ&adurl=",
    brand: "Philip B.",
    reviews: 4,
    rating: 5,
  },
  {
    name: "Shu Uemura - Ishi Sculpt Hair Pomade - 75 ml",
    price: 45,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLInRQRI75GDxMtjs5-cnCZCDvZOQYcDJwsyoenAFQ4OBva7ljiFQ8T6Az3q8nViyq2vHoPun4FuO4sIAD9oZZB7UWE_RIXOtloo-4AcT94VkT6BBF0U32hww&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBTGgJ5bQ&sig=AOD64_38Mca4_AIlc3548Rp5hlzJnr5lgQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQww8I9xQ&adurl=",
    brand: "Shu Uemura Art Of Hair",
    reviews: 144,
    rating: 4.5,
  },
  {
    name: "Men's Hair Putty - Strong Hold & Low Shine | Pete & Pedro 2 oz. $20",
    price: 20,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTP3hFCVFm5DHG8zlND9ct4tO58zcl4XZtNwOTPJT3oEhr7Tca6RhfPDQwwIy3ELSeZJhK9MfMY33m-Dy4qi8dkJ6V-ZhYuxG70wYXt9I2qbpTeU_VSQbJGrg&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBYGgJ5bQ&sig=AOD64_1jcy-ajyykXXiNkqMJmL0jai6QGQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4I9SM&adurl=",
    brand: "Pete & Pedro",
    reviews: 3,
    rating: 4.5,
  },
  {
    name: "Clay Matte Pomade -Strong Hold Matte Finish Pomade | Reuzel 4 oz / 113 g",
    price: 20.95,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTkI1RG3mhC4Bf-eOkBsYV2DyL3FXfESv0m1gc7xNBvROsWcWV9Tlxk21XO262y_1jxnVv3QffHdvSRsEKtbklFiVpw7QsB_mgnjUYaEGdAfoUkLDB2MZCJ&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBaGgJ5bQ&sig=AOD64_164yj1s1BvGBrqE3W3q_Jky28YkQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4I-CM&adurl=",
    brand: "Reuzel",
    reviews: 830,
    rating: 4.5,
  },
  {
    name: "Athena Club | Wax Strip Kit for Body",
    price: 10,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcScCytG25h-o1KoEurYX5aLVh-99DEfp7_2bTGq3rMjmaaeEd6F2j1oSffb7mu_6lAl40tT6LJHb8HVm9JO_1nCoWiLZuOaLw4r_hoRgOR5iS0TGqV3VrbWiA&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBeGgJ5bQ&sig=AOD64_3MvpjXUDO43es7nBh8YUlqSitbPw&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IgCQ&adurl=",
    brand: "Athena Club",
    reviews: 12,
    rating: 4,
  },
  {
    name: "Matte - No Shine Hair Paste 4 oz",
    price: 15.99,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGbKLy7yYKA2dWW3nJCw8LLOfSZs5EXSvfuiq4ZyLrD-qwL5VVFfg9A0CrgdOY4aYvax3u2tJvwL_OSnqh1-xKlB0XJaM0FcdGbC4VVPQhsAFBW1rmBB23&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBgGgJ5bQ&sig=AOD64_2t5oRAqXod1XYYAEnVBLZ9L-aPgw&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IgyQ&adurl=",
    brand: "Pacinos Signature",
    reviews: 198,
    rating: 4.5,
  },
  {
    name: "the product Hair Wax 42g",
    price: 25.2,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSBjqyj4LuVOj_zKVF2oya5LDoejmBRGBMSloxG-81RWvIQmZu3wr-p291Nvj1Tx23k-vl8pZeuCuPlV_1NE_EqMl-F6V9me24b5BI27xRH49Uw35uneEpX&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBkGgJ5bQ&sig=AOD64_1gDSiRXxkJA2YsbHKgVB22eZLC6g&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IiCQ&adurl=",
    brand: "YesStyle.com",
    reviews: 21,
    rating: 5,
  },
  {
    name: "Waxing Kit At Home. Easy to use Hard Wax Kit for Professional salon results at home",
    price: 61.99,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXJI1WDUAYxonjZdoz7GBOVi8_S3m7ggqrv6wL-ORFymFDZSLiFh6SrAd7Gu2rzS7ctVva-WnvfaH85ms0-r63Ufp26vg2sBe11OAhkVQ&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBnGgJ5bQ&sig=AOD64_0uZ3PCSL3Rxdzo6pvRcqoU0wrSCw&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IjyQ&adurl=",
    brand: "Happy Waxing",
    reviews: 119,
    rating: 5,
  },
  {
    name: "Mademoiselle Pink Polymer Based Film Hard Wax Beads - 10 lbs",
    price: 235,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmk4eSZIbAnyLygVf5cQQyeR6oo0P_1mPBbpl2hnfTouwiiRPRf00Gd_dfA2xj4lcQsPB_1vY2yqrZuIbsTdfmzX6r9P3ghYyzbPgIlkS8L4uioOn_-FLp&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBpGgJ5bQ&sig=AOD64_1_B7gMIJaE1aY0Oj-RP68s4Tj4Qg&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IkyQ&adurl=",
    brand: "Miss Cire",
    reviews: 96,
    rating: 4.5,
  },
  {
    name: "MALIN+GOETZ hair pomade.",
    price: 26,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQFXTC5y2L4RG4j7O0COXAUEathZcFlf-fHhYQP1ckolI5tKJxeyZXAYsxZxjpg9Lg16LmN3acTBE0KZTN5k-ItacQF6GfoFydGVDZ9lfQZ9X8Q5XfXTCvfUQ&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABBwGgJ5bQ&sig=AOD64_322zb0sRwXNNo100ejdZ6i21nCpg&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IoCQ&adurl=",
    brand: "Malin+Goetz",
    reviews: 66,
    rating: 4.5,
  },
  {
    name: "LUXE Hypoallergenic Vegan Film Hard Wax - 8 oz",
    price: 25,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSceJ8vQbP-9SHMaf3t6V_B4F2Lz4-sJlNLZ0GU_aECaijOl6sowJZhvs6wmkmTMEELYlf2BqyDZ7XSMZxCDHzzen6yL7vxDTxqkLp2TaEoq2oRIHI3XP8f4CE&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABB0GgJ5bQ&sig=AOD64_0GFic-43PWgzJMnNO_WlL_cDtDCw&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IpyQ&adurl=",
    brand: "Miss Cire",
    reviews: 8,
    rating: 4.5,
  },
  {
    name: "Kérastase - Cire d'Épaisseur Texturisante Wax Pomade - 75 ml",
    price: 45,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREOwHLtvwMRwLI_fMnhSdOaHA7nxe_2ghHKD-I-c7NgmB32sTY_Gb9jZa2LLGNH63gkRrtSyVciyORuG3tvxTg6edVJMA64ElXAZyva6iuIjoSLXW-tfH402I&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABB3GgJ5bQ&sig=AOD64_1m3Ap1swatntcz2KVJrzYtYvRGTw&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IriQ&adurl=",
    brand: "Kerastase",
    reviews: 615,
    rating: 4.5,
  },
  {
    name: "R+Co DART Pomade Stick, 0.5 oz | Dermstore",
    price: 23,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXDbeO5c1-FKje3lg3o9Rn6aGeX8Q129Q2Lap3qvcu7EFjhchy3a6DK6EHMJUu_1t7F8spm03QaSYTSj-sj0iJswCXSusZux_859DajAlqGM8d1cpIAyu9&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABB6GgJ5bQ&sig=AOD64_2lWwgAu8vlYxlqxxXY-nrM_e003w&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4ItSQ&adurl=",
    brand: "Dermstore.com",
    reviews: 73,
    rating: 5,
  },
  {
    name: "Suavecito | Matte Pomade Moonlit Musk / Monsters / 4 oz",
    price: 5,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7VoTsZ9y8VzWROAWqPdjj1xmm2ENDlLDNibaD-pUlsaasP3GTiEXH0mqzqaR20IuUuxYHH0KJB8RgYQrFJ9Amsgc_98NZ8zTxWTWC57RCSJipvzkAtUEo&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABB8GgJ5bQ&sig=AOD64_0r5lrhTs63yas0emAqs0F_EJCjHQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IuCQ&adurl=",
    brand: "Suavecito",
    reviews: 553,
    rating: 4.5,
  },
  {
    name: "Johnny Slicks - Organic Oil Based Pomade Original",
    price: 20,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPnatpT6eYqO_QuUQ9jimbigvFTwLaOoIcx6kO-7ApxPVjj8ATdApY75BUinF_80KxNOEwE08BY-RJzsL-JX7K1AZ4b_uQWl5XG-fi9jzIDLNWEJXoNE6RijA&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABB-GgJ5bQ&sig=AOD64_1bpVAwR-feDorwrP_H7ORrNVhbfw&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IuyQ&adurl=",
    brand: "Johnny Slicks",
    reviews: 1,
    rating: 5,
  },
  {
    name: "American Crew Men's Liquid Hair Wax (5.1 oz)",
    price: 16.5,
    image_url:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSYXsKli80_N0LoxxIKg4Xl956E4OP0zBixS2H0ySVsdq-XU-05UmGVxELbEnKGO3reMN5sDki1vAoYZD03mgsziOddD1YeeJrVtGiAi6rRUtup2aeepeCzOA&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABCDARoCeW0&sig=AOD64_3l24yscN3ZK1pJEVOpZ_UR0-nlOQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IxSQ&adurl=",
    brand: "American Crew",
    reviews: 2,
    rating: 4.5,
  },
  {
    name: "Keune 1922 By J.M. World Class Wax 2.5 oz",
    price: 25.5,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDW4wtRybpDchDzbHazogbEM9v9CrIWRTUCj1bZ-oBfajGnOsv0MegnjfFTy77bzvnpAb4kEgR_WBtpDc_AkTipoO0kHyz8Hs3EGmRjoPXqNFrgVakkyP3GA&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABCKARoCeW0&sig=AOD64_3WKNXvtyHKFDBTbRUcshsQN3zoLg&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4I0iQ&adurl=",
    brand: "The Warehouse Salon",
    reviews: 55,
    rating: 4.5,
  },
  {
    name: "Besame Mucho Clear Hypoallergenic Vegan Film Hard Wax Beads - 1.85 lbs",
    price: 55,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsFTyR_QFcuuXHG8X694jz4TA2xrWQuy-WMoNrRtWBcEbz1tBLcQg6pEkAfPmC_vbU1uaGgY9K3NQyXu7vu9xpvAac14pXIuLS7I-mBhXtHTj0I2gCyp3G1Co&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABCOARoCeW0&sig=AOD64_12a8LAiPteZD9uri7AVCNG6QfH_g&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4I2iQ&adurl=",
    brand: "Miss Cire",
    reviews: 26,
    rating: 5,
  },
  {
    name: "Kérastase Genesis Homme Light-Hold Styling Wax Pomade",
    price: 45,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRwktNB2G6jQJp1dgwlJoDjMJgHx6_b24c0BMMhmELDhHYqPIaCxHi4X_wR5bJ23tzGgo-iRlnGnNYe6V_cbvh5x1E2gYeyr1MHp_bDL5IvASeiNRuME-Z&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABCTARoCeW0&sig=AOD64_24Pk1tZXK1yYVuorHjGen81G84hQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4I5CQ&adurl=",
    brand: "Sephora",
    reviews: 615,
    rating: 4.5,
  },
  {
    name: "Shaping Wax",
    price: 22,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTaFAw79l3cESg7WgC_BiUj8rO69peBLJjlki1ydnjpjtXNT82fDkX3KLfYAKsPpRiQjJy7uHYRuWjphr54dwxdZSctK1ZxB00HxLM4JfqShLVvKxK1JdLs&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABCXARoCeW0&sig=AOD64_0sItf18qMLAlbFTzkXoDxLkyW86w&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4I6iQ&adurl=",
    brand: "GK Hair",
    reviews: 2,
    rating: 5,
  },
  {
    name: "Color Hair Wax | Temporary Hair Color | Ashley Lee Cosmetics Purple",
    price: 4.75,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRzHSLlRX12bUUS2Lnf23dBj_mRJZ1t11raobPAzV0aKUsCCVGLR2TZau2tqlKZWtCi0WpXYGALhkKw2YiMHSl41KoS5gV2s1QworJkpJGxSY8gk2f4MsP8&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABCaARoCeW0&sig=AOD64_2xfaGWv_PBigpLXLTnN4Yf6st1OA&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4I8SQ&adurl=",
    brand: "Ashley Lee Cosmetics",
    reviews: 394,
    rating: 5,
  },
  {
    name: "Sachajuan Hair Wax 75ml",
    price: 34,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSuPivFnnsGMdHHXy7WIpEpKLuAcIQ28TuVHUb5qrrimz-BtYx1n55niFKB0rYmhdYyTR-C1fRdAcddF8-iP_8LNCBatxwUyEU0KkO26fkJ52DcSllsYNTiEeA&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABCeARoCeW0&sig=AOD64_2LwDhVXGeVwvQwJPMTbqrtbFHLng&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4I9iQ&adurl=",
    brand: "Camera Ready Cosmetics",
    reviews: 35,
    rating: 4.5,
  },
  {
    name: "Patricks M1 Matte Finish Light Hold Styling Product, 75 g | Dermstore",
    price: 60,
    image_url:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcREdZwY0uDXdBP7m0XuGqg7FWNnHi9xuZpEYc1YA60ogkg-KZd_87yA_MHRoqoex85K6gpcFDrHTujSIvvHg39gVe15KtHeO_-Vhs9EAyFkkKGhNqo5ZbDIp9U&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABCgARoCeW0&sig=AOD64_0XK3aXWR0zIfhJ4EDp73Pix_1ZgA&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4I-SQ&adurl=",
    brand: "Dermstore.com",
    reviews: 52,
    rating: 5,
  },
  {
    name: "BIH Styling Hair Wax (120g/4.23oz) Hair Coloring Material, Natural Stereotypes Not Stiff, Easy To Wash,Temu",
    price: 5.84,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQrWo31sQouOu2A8rE-k0Za0sHXN_oQRa2bW0mZfr8KizfL4KLwjktODJ_vHiWyoy9H0ARzneezYC6gAPNpGwoeEIB0xEUpVa_fsWQ3fE&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABCiARoCeW0&sig=AOD64_0Deb6bWDvnzXvrdEUyXOxe5OMGkw&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4I_SQ&adurl=",
    brand: "Temu",
    reviews: 48,
    rating: 5,
  },
  {
    name: "Paul Mitchell Dry Wax | 1.8 oz",
    price: 21.5,
    image_url:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNmdkIyk6g0iB5YQ_q8tasbgH4cYCgpbF4RdvJB_7XH8wRkZGf6Mg2hw5V9t4sz53T9plduTPXjIe72qZobsThtK9w8VvYXSK8Z4_hGwgVILIjuf03X-zl7ODy&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABCpARoCeW0&sig=AOD64_1b1TWWuQtB2l5Tc31Ub1rgBl9zIA&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IiiU&adurl=",
    brand: "John Paul Mitchell Systems",
    reviews: 2,
    rating: 4.5,
  },
  {
    name: "Uppercut Deluxe Featherweight",
    price: 20,
    image_url:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMU-ib2zmgkxrOdwcBa9cHgLduNI2tqSodlc5p_5U6zONCgUCH3tgz0FqWp9IEUrNoZDxtsHnlbnTsSXJpPj114M-YPn_DPipqTe_7MT4I6o8fUTm94o-BXg&usqp=CAE",
    product_url:
      "https://www.google.com/aclk?sa=l&ai=DChcSEwiKxbza5_H-AhXBELMAHbKbD7YYABCsARoCeW0&sig=AOD64_1MMmjZdm3Q7x7NJ0gznMPh3aRPRQ&ctype=5&q=&ved=0ahUKEwjgqLXa5_H-AhV0E1kFHbV3ADsQ9A4IkSU&adurl=",
    brand: "Uppercut Deluxe US",
    reviews: 1,
    rating: 4.5,
  },
];

export default HAIR_PRODUCTS;
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
