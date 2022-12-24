import { Box, Flex } from "@chakra-ui/react";
import SingleBlog from "./SingleBlog";




export default function Blog() {
    let img=[
        "https://www.jefit.com/wp/wp-content/uploads/2021/10/woman-exercise-fitness-gym_34011-196.jpeg.webp",
        "https://www.jefit.com/wp/wp-content/uploads/2017/12/How-to-Set-Smart-Fitness-Goals-for-the-New-Year-You-Can-Actually-Stick-To.jpg.webp",
        "https://www.jefit.com/wp/wp-content/uploads/2020/08/young-muscular-man-during-his-workout-street-1024x680.jpg.webp",
        "https://www.jefit.com/wp/wp-content/uploads/2022/12/london-uk-may-2021-discord-social-network-logo-smartphone-1-1024x683.webp",
        "https://www.jefit.com/wp/wp-content/uploads/2020/10/victor-freitas-CQwNdMxwjfk-unsplash-1024x683.jpg.webp",
        "https://www.jefit.com/wp/wp-content/uploads/2020/10/strong-young-man-holding-dumbbells-1024x618.jpg.webp",
        "https://www.jefit.com/wp/wp-content/uploads/2022/10/man-running-park-forest-against-trees-space-1024x683.webp",
        "https://www.jefit.com/wp/wp-content/uploads/2022/12/happy-stylish-man-casual-clothes-standing-cliff-mountain-1024x683.webp",
        "https://www.jefit.com/wp/wp-content/uploads/2022/12/muscular-man-doing-push-ups-using-dumbbells-1024x683.webp",
        "https://www.jefit.com/wp/wp-content/uploads/2017/12/Sleep-Deprivation-Causes-and-Effects-in-the-Gym.jpg.webp",
        "https://www.jefit.com/wp/wp-content/uploads/2021/06/fit-man-sitting-down-white-stairs-drinking-from-blue-shaker-1024x682.jpg.webp",
        "https://www.jefit.com/wp/wp-content/uploads/2022/12/outdoor-shot-active-dark-skinned-man-running-morning-has-regular-trainings-dressed-tracksuit-comfortable-sneakers-concentrated-into-distance-sees-finish-far-away-1024x683.webp"
    ]
    let hd=[
        "Four Reasons for Personal Trainers to Use Jefit Coach",
        "How to Set Smart Fitness Goals for the New Year You Can Actually Stick to",
        "Dips Are One of the Best Exercises for Building Strength",
        "Discord Bot Update – Linked Roles and How To Use It",
        "Build Strong, Powerful Shoulders With a Push Press Exercise",
        "Want to Get Stronger in the Gym? Develop Core Stability",
        "4 Ways Exercise Can Help Beat the Winter Blues",
        "Small Changes Can Lead to Big Improvements in Health",
        "How to Make a Great Bodyweight Exercise More Challenging",
        "Lack of Sleep Can Have Negative Effects in the Gym",
        "Do You Need More Daily Protein In Your Diet?",
        "4 Important Tips to Know for Effective Fat Loss"
    ]
    let lnk=[
        "Product Tips & FAQ / By Michael Wood, CSCS",
        "11 Comments / General Fitness / By Emily Trinh",
        "3 Comments / Exercise Tips / By Michael Wood, CSCS",
        "What's New / By Ryan",
        "Workout Tips / By Michael Wood, CSCS",
        "2 Comments / General Fitness / By Michael Wood, CSCS",
        "Exercise Tips / By Michael Wood, CSCS",
        "General Fitness / By Michael Wood, CSCS",
        "Exercise Tips / By Michael Wood, CSCS",
        "6 Comments / General Fitness / By Emily Trinh",
        "2 Comments / Nutrition Tips, What's New / By Michael Wood, CSCS",
        "General Fitness, Nutrition Tips / By Michael Wood, CSCS"
    ]
    let oth=[
        "The award-winning Jefit app launched a coaching platform last year called Jefit Coach. The product enables personal trainers and coaches to train and follow their clients, training groups and entire teams. Coaches are now able to take advantage of the many unique features of the platform for their clientele. Jefit has been up and running …",
        "It’s that time of the year again – New Year’s is coming up which means New Year’s resolutions. However, according to U.S. news, 80% of people give up on their resolutions by the second week of February",
        "When you do your next workout make sure you add a few sets of bodyweight dips into the mix.",
        "Recently we launched a new way to share your fitness journey on discord via a Discord bot. Now we added new functionality to the bot that takes advantage of a feature Discord is recently released – Linked Roles. Now you can add stats from your fitness journey directly to your Discord profile! Wear your stats …",
        "Are you looking for a new exercise to add strength and size to your shoulders? A great movement that can help is the push press exercise. You may have seen someone at the gym doing it using either a barbell, dumbbells, or kettlebells",
        "One of the leading back experts in the world is Stuart McGill, PhD. He has spent his career, spanning more than 30-years, researching spinal biomechanics at the University of Waterloo in Canada. His core stability program, known as the Big 3, is one of the most often performed core exercise programs. His routine is so …",
        "As the holidays get closer, the days are getting shorter and sunlight becomes more scarce. For some people, the winter time is not only a time of celebration but also a time when they may notice changes in their mental health.",
        "The cumulative effects of small changes are key to improving both your health and fitness level. Most people are looking for the home run or the secret “ingredient” or new diet when trying to lose weight or improve their fitness level. As an alternative approach, begin to develop new habits with just a few small changes …",
        "There are many great bodyweight exercises available when traveling or if you can’t make it the gym workout. Bodyweight exercises like pull-ups, squats and lunges are all very beneficial.",
        "One of the biggest factors that contributes to how well we perform in the gym is sleep. Sleep quality plays a vital role in maintaining an active and healthy and life",
        "Many people, including some researchers, have differing opinions when it comes to the amount of daily protein your body actually needs. The numbers also vary depending on whether you’re a strength or an endurance athlete. Additional factors like age and the number of days you’re hitting the gym will also play a role in your …",
        "If you want to lose body fat, you’re not alone. Effective fat loss, however, can be very challenging at times, especially if you try to overcomplicate things."
    ]

    return (
        <Flex 
            w={{base:"90%", md:"90%", lg:"70%"}} 
            margin="auto" 
            mt="50px" 
            flexDirection="column" 
            gap={{base:"30px", md:"50px"}}
        >
            {
                img.map((el,i)=>(
                    <SingleBlog key={i} poster={el} heading={hd[i]} link={lnk[i]} others={oth[i]}/>
                ))
            }
        </Flex>
    )
}