const sinaiGoogleReviewsUrl = "https://www.google.com/maps/place/Sinai+Dental+Practice/@0.3380588,32.58444,17z/data=!4m8!3m7!1s0x177dbba666177429:0x5a1ad88f3a5c5f9a!8m2!3d0.3380534!4d32.5870149!9m1!1b1!16s%2Fg%2F11csqvhg35?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D";

const sinaiFacebookReviewsUrl = "https://www.facebook.com/sinaidental/reviews"
const sources = { google: "google", facebook: "facebook", twitter: "twitter" }

const reviews = [
    {
        source: sources.facebook,
        author: "Tony Saint Ruxy",
        avatar: "https://scontent.febb9-1.fna.fbcdn.net/v/t39.30808-1/468926502_10163558070397195_1541060554540200017_n.jpg?stp=c151.55.693.693a_cp0_dst-jpg_s40x40_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=q300L28SaHQQ7kNvwGmfIjd&_nc_oc=AdkltuKuaKLLCLbv-cmKR9EF2L2HZ-9uf8AhW-bj0ueCngmer5nIWAISXXhBRfiaGYo&_nc_zt=24&_nc_ht=scontent.febb9-1.fna&_nc_gid=gC09QIXb4xTQOcDOA-34dg&oh=00_AfStHWG1f-AxaFNz3Y5-Jboy-GzELQ2r9UWaT1H6GDu9jA&oe=68852BA5",
        text: "If you care about your teeth and are looking for long term solutions, this is the team for you. This is from a person who has had a long history of tooth issues with many dentists. Unlike other providers who only do enough to keep you coming, the great team at Sinai Dental goes all the way to take care of your current and future dental needs.",
        rating: 5,
        link: sinaiFacebookReviewsUrl,
    },
    {
        source: sources.twitter,
        author: "Sofi Lundin",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVCfUgjRg8rIHOaAkOujia5AnZo0WHI0gmw&s",
        text: "It is usually cash before care when you seek health care in Uganda, but sometimes you are lucky. Today I met Dr. Matthew Rubona at Sinai clinic, who cured my son's fear for going to the dentist. Such a gentle, knowledgeable and caring dentist. Can highly recommend him! #uganda",
        rating: 5,
        link: "https://twitter.com/Sofilundin/status/1764700637642502533",
    },
    {
        source: sources.facebook,
        author: "Cathy Nantongo",
        avatar: "https://scontent.febb9-1.fna.fbcdn.net/v/t39.30808-1/468937024_10160933726904353_3849313548174083522_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=3GIVmaR_B4wQ7kNvwHOPh37&_nc_oc=AdlIyTMReaqJkzo6CLP8arg3t-Y35RdXWV9k0qVfALtT35oxLAEhZm3bo7kLtSE2y8U&_nc_zt=24&_nc_ht=scontent.febb9-1.fna&_nc_gid=m_r3_lACxNahQwccHZUhFA&oh=00_AfSNh4B2cpti5IyVHapzjYfZ5bJ4idtGccQrmQw_NGhsMw&oe=68851C39",
        text: "The service was exceptionally good👌. My little boy is such a 'chicken' but I was impressed at how well he was attended to. Thank you Dr. Matthew",
        rating: 5,
        link: sinaiFacebookReviewsUrl,
    },
    {
        source: sources.google,
        author: "Vikram DOOKNA",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUtDsp8JhhUoOlkfVy0b1T41RifEJNInH4J-Z8ZAGfV1bWVmyEG=s64-c-rp-mo-ba2-br100",
        text: "Came as my bridge fell down, was advised professionally and requested a dental cleaning. That was the most professional inclusive plaque removal process... finishing with a floss.. highly recommended 👌",
        rating: 5,
        link: sinaiGoogleReviewsUrl,
    },
    {
        source: sources.facebook,
        author: "Shazie Shams",
        avatar: "https://scontent.febb9-1.fna.fbcdn.net/v/t39.30808-1/285665574_2904505769849903_6794387549446938823_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_ohc=dsnlqENwK8wQ7kNvwGZPmEr&_nc_oc=AdlhDH31H4682utFzjML4xmRze8cVR1WqcXKu-AlCs_3jeU3k-hUCSld4Ke7PwDHDss&_nc_zt=24&_nc_ht=scontent.febb9-1.fna&_nc_gid=FdXHizS5sLRrMaLcBQaO9g&oh=00_AfQZb-iAtB3w3bOL5hZmxp77qdaZSwKWkYXqQah5Gwer0g&oe=688530C1",
        text: "Hands down Dr.Mathew is the best dentist and has the best team too. so caring , professional, attentive , kind ..let's just say they love and know what they are doing . I came back to Uganda to have all four of my wisdom teeth extracted and two molars filled which molars had been messed up by another dentist and kept on giving me issues .Dr.Mathew and his team were so patient with me throughout the whole procedure and kept on checking to make sure I was okay and had no pain, even through the healing process they called everyday to see how I was doing and scheduled follow ups. I can say that that has been the best dental experience I have ever had and I sure will get on that plane again to just come and have him work on my teeth again. Higly recommend for both adults and children , you will not regret it, absolutely amazing team .",
        rating: 5,
        link: sinaiFacebookReviewsUrl,
    },
    {
        source: sources.facebook,
        author: "Racheal K Sekagiri",
        avatar: "https://scontent.febb9-1.fna.fbcdn.net/v/t1.6435-1/108209802_3390976484299516_8808459061348793570_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=3k28ML5CyN8Q7kNvwEkweGo&_nc_oc=AdkmIgHYemkiHOru_aL_38B774j7mzn9-xTKwnqq4E1Bh1oRKQ9jZ8ye9FjLPAcEuQQ&_nc_zt=24&_nc_ht=scontent.febb9-1.fna&_nc_gid=TrG0gAlREAghWRgO_7Ue6Q&oh=00_AfSkDMtMEfq7lJHCkKbGfBPhervWmkEM6b-wXFpAaKy9HQ&oe=68A6CA1C",
        text: "Dr. Mathew's attention to all patient details and the extra mile he goes to educate patients about their dental issues.",
        rating: 5,
        link: sinaiFacebookReviewsUrl,
    },
    {
        source: sources.facebook,
        author: "Sabine Liebknecht",
        avatar: "https://scontent.febb9-1.fna.fbcdn.net/v/t1.6435-1/42101554_235995393930624_6935143908292689920_n.jpg?stp=c80.0.480.480a_cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=sZXXvgNpstwQ7kNvwHTrcf8&_nc_oc=Adm9c0KX5iC7C9zN0TwGxN9qUZOlqpd1ruy1OhhIBh0gmhxWfpvHtUQto3Vb1wjtAlI&_nc_zt=24&_nc_ht=scontent.febb9-1.fna&_nc_gid=TrG0gAlREAghWRgO_7Ue6Q&oh=00_AfTFQwTWtwYXuQDI6Ra2hFeXiCXBuwA6m4phQ20xR4Yptw&oe=68A6BEDA",
        text: "Great dentist and very responsive, felt more accomodated than with my dentist in Germany.",
        rating: 5,
        link: sinaiFacebookReviewsUrl,
    },
    {
        source: sources.facebook,
        author: "Lydia Bujara",
        avatar: "https://scontent.febb9-1.fna.fbcdn.net/v/t1.6435-1/34512508_1915563601841431_6752827709128179712_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=NLn_69_6RnwQ7kNvwGO07XY&_nc_oc=AdlAJTIrKELAChwMhFG6aA2lSnnNLPK3LFU35NrMio05YDuKMgQ902P7zciNSld4lDY&_nc_zt=24&_nc_ht=scontent.febb9-1.fna&_nc_gid=m_r3_lACxNahQwccHZUhFA&oh=00_AfQEFkMpLCBqBraHVsmX0tm5cNYaVQFUf_oULWF2Qv32Fw&oe=68A6D22D",
        text: "When your child looks forward to going to the dentist.....thanks Daktari Matt!",
        rating: 5,
        link: sinaiFacebookReviewsUrl,
    },
    {
        source: sources.google,
        author: "Lynsay",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW4P0uvDFKleI_GVGrp3cHWNek4GvSRff3zmSjHEI7XDeGv4SQffA=s64-c-rp-mo-ba4-br100",
        text: "Dr. Matthew came highly recommended and did not disappoint. My three young children had check up and cleaning and he made them feel comfortable and not one of them was nervous.",
        rating: 5,
        link: sinaiGoogleReviewsUrl,
    },
    {
        source: sources.google,
        author: "Tony Rukera",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXkDCij4HzzDeZgKDZFZMHwINYCmLJkbjLe-FY6DpCk0HJ3IfqB=s64-c-rp-mo-br100",
        text: "Thank you Dr. Mathew and your awesome team at Sinai Dental for a wonderful, totally painless experience! Nothing beats the family practice experience",
        rating: 5,
        link: sinaiGoogleReviewsUrl,
    },
    {
        source: sources.google,
        author: "Catherine Tushabe",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUW0hiTAK4CLIGcG4tJGFybw8QJWX4QQXsYKGItUZrjS7Qv2n-jKg=s64-c-rp-mo-ba2-br100",
        text: "The best dental experience I have ever had. It's 7 months since I did a root canal and a crown. Awesome job. I would highly recommend them 👌👍",
        rating: 5,
        link: sinaiGoogleReviewsUrl,
    },
    {
        source: sources.google,
        author: "Butterfly R",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXmb3DKISOSkAGh5st_wFQPOuZN6R9GBuECTeuJiJxSe2txJDyr=s64-c-rp-mo-ba5-br100",
        text: "Dr Matthew just did an awesome root canal procedure. Patient, and gentle, and best the injections did not hurt. I would recommend this dental practice to anyone who is petrified of dentists.",
        rating: 5,
        link: sinaiGoogleReviewsUrl,
    },
    {
        source: sources.twitter,
        author: "Sofi Lundin",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVCfUgjRg8rIHOaAkOujia5AnZo0WHI0gmw&s",
        text: "Finding good health care providers is a big challenge in Uganda. It is usually business before care. But there are some amazing people. Dr. Matthew at Sinai Dental in Kololo is a gem. Professional and affordable. Also amazing with kids. #uganda #healthcare #dentist.",
        rating: 5,
        link: "https://twitter.com/Sofilundin/status/1811683888260894763",
    },
];

export default reviews;