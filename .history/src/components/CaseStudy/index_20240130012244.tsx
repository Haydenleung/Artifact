import Image from "next/image"
import styles from './casestudy.module.css'
import banner from "../../../public/image/moneyment/banner2.webp"
import icons from "../../../public/image/moneyment/titleicon.webp"
import persona_A from "../../../public/image/moneyment/persona1.svg"
import persona_B from "../../../public/image/moneyment/persona2.svg"
import branding_logo from "../../../public/image/moneyment/branding_logo.svg"
import color from "../../../public/image/moneyment/color.svg"
import typeface from "../../../public/image/moneyment/typeface.svg"
import userflow from "../../../public/image/moneyment/userflow.svg"
import wireframe from "../../../public/image/moneyment/wireframe.svg"
import midfi from "../../../public/image/moneyment/mid-fi.svg"
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import ParallaxProvider from "../ParallaxProvider";

export default function CaseStudy() {


    return (
        <div className={styles.project}>
            <ParallaxProvider />
            <div className={`${styles.titleSection}`}>
                <div className={`${styles.projetTitle}`}>Moneyment
                    <Image src={icons} alt="" className={styles.projecticon} objectFit={'contain'} />
                </div>
                <h3 className={styles.projectTag}>Budget today, save for tomorrow</h3>
                <div className={styles.projectInfo}>
                    <div className={`${styles.introduction}`}>
                        <div className={`${styles.introTitle}`}>About</div>
                        <div className={`${styles.introBody}`}>
                            The project's main objective was to design a financial and budgeting application specifically for post-secondary students. The application was powered by Artificial Intelligence (AI) technology and aimed to provide personalized financial recommendations and strategies to help improve students' financial well-being. The goal was to create a revolutionary financial empowerment app to uplift students' lives.
                        </div>
                    </div>
                    <div className={styles.subInfo}>
                        <div>
                            <div className={styles.subText}>Role</div>
                            <div className={styles.subTextBody}>UI & UX Designer<br />Brand Designer</div>
                        </div>
                        <div>
                            <div className={styles.subText}>Duration</div>
                            <div className={styles.subTextBody}>4 months</div>
                        </div>
                        <div>
                            <div className={styles.subText}>Skills</div>
                            <div className={styles.subTextBody}>
                                User Research, Interaction, Visual design, Prototyping, Testing, Collaboration, Marketing
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.process} ${styles.section}`}>
                <div className={`${styles.processTitle} ${styles.heading}`}>Timeline</div>
                <Image src="/" alt="" width={100} height={400} className={styles.timelineImage} />
            </div>
            <div className={`${styles.problem} ${styles.section}`}>
                <div className={`${styles.problemTitle} ${styles.heading}`}>Understanding the Problem</div>
                <div className={`${styles.problemBody} ${styles.body}`}>
                    Financial stress among Canadians is a significant problem that affects many individuals and families. According to Statistics Canada (2022), one-third of Canadians need help to meet their financial needs, and one-quarter cannot cover an unexpected $500 expense. Furthermore, certain disadvantaged groups, including 57% of young Canadians, are especially struggling with their financial situation, indicating that this issue is affecting a broad range of Canadians.
                    <br /><br />
                    The problem of financial stress can have a severe impact on an individual's mental and physical well-being. This problem is particularly concerning given that many Canadians are optimistic about improving their finances, with 37% of Canadians in financial stress remaining highly optimistic. However, only 25% of them believe that their financial situation can improve within one year, indicating a need for more confidence in their ability to overcome this problem.
                </div>
                {/* <Image src="/" alt="" width={100} height={400} className={styles.problemImage} /> */}
            </div>
            <div className={`${styles.research} ${styles.section}`}>
                <div className={`${styles.researchTitle} ${styles.heading}`}>Research</div>
                <div className={`${styles.researchBody} ${styles.body}`}>
                    In the research phase, we first gained a deep understanding of the daily difficulties, needs, and spending habits of post-secondary students.
                </div>
                <div className={`${styles.subGrid}`}>
                    <div className={`${styles.subBody}`}>
                        <h4>Survey & Findings</h4>
                        <p>This user survey aimed to gather insights from young students through a survey consisting of 30 questions. To ensure a representative sample, we delivered the study to multiple communities with a high concentration of young students. We ensured the survey was accessible to all participants and provided clear instructions.</p>
                        <p>After the survey period ended, we received 11 responses from the communities. We then analyzed the responses and identified trends and patterns in the data. The insights we gained from the survey are helping us to understand better the needs, preferences, and challenges of young students.</p>
                    </div>
                    <Image src="/" alt="" width={100} height={400} className={styles.surveyImage} />
                </div>
                {/* <div className={`${styles.subGrid}`}>
                    <div className={`${styles.subBody}`}>
                        <h4>Finding</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim. Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue</p>
                    </div>
                    <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
                </div> */}
                {/* <div className={`${styles.subSection}`}>
                    <h4>User Story</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim. Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue</p>
                    <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
                </div> */}
                <div className={`${styles.subSection}`}>
                    <h4>Persona</h4>
                    <p>Based on the user research and findings, one primary and one secondary persona were identified:</p>
                    <div className={styles.subPersona}>
                        <div>
                            <p><span style={{ fontWeight: '700', fontSize: '16pt', lineHeight: '250%' }}>Primary <br /></span>
                                Liza Chow is a 20-year-old woman from Kitsilano, BC, pursuing a Bachelor of Fine Arts while working part-time. She strives to balance her studies, work, and personal life. Liza prioritizes personal growth and artistic improvement over saving money, but she aims to pay off her loans quickly for financial independence. <span style={{ fontWeight: '600' }}>She values security, stability, and communication and is seeking tools to manage her finances efficiently. Liza also wants to stay organized while combating creative limitations and impulsive spending tendencies.</span>
                            </p>
                            <Image src={persona_A} alt="" width={400} height={400} className={styles.personaImage} />
                        </div>
                        <div>
                            <p><span style={{ fontWeight: '700', fontSize: '16pt', lineHeight: '250%' }}>Secondary <br /></span>
                                Omar Ali is a 28-year-old Syrian residing in East Vancouver. He was studying at Vancouver Community College while working full-time as a line cook. His ultimate goal is to become a Permanent Resident of Canada. However, he faces challenges in managing his finances efficiently, dealing with international fees, understanding budgeting, and navigating immigration paperwork. <span style={{ fontWeight: '600' }}>Omar is seeking practical tools to help him budget better, manage finances comprehensively, and ensure security and credibility in his decision-making for future endeavours.</span>
                            </p>
                            <Image src={persona_B} alt="" width={400} height={400} className={styles.personaImage} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.userflow} ${styles.section}`}>
                <div className={`${styles.flowTitle} ${styles.heading}`}>User Flow</div>
                <Image src={userflow} alt="" width={400} height={400} className={styles.flowImage} />
            </div>
            <div className={`${styles.design} ${styles.section}`}>
                <div className={`${styles.designTitle} ${styles.heading}`}>Design Decisions</div>
                {/* <div className={`${styles.designBody} ${styles.body}`}>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim.</div> */}
                <div className={`${styles.subSection}`}>
                    <h4>Inspiration & Wireframe</h4>
                    <p>The first idea is to create a comprehensive financial app that can handle most of the daily spending operations of a student and help them deal with financial issues specific to students. AI technology will enhance user experience and lead them to financial success. This process has successfully visualized almost all the features that fulfill students' needs. It has created a potential road map to process how the app should look and identify its winning features.</p>
                    <Image src={wireframe} alt="" width={100} height={400} className={styles.wireframeImage} />
                    <p>After considering the wireframe and ideation process, it is crucial to consider student engagement and what they would like to focus on when it comes to financing. Therefore, a new mock-up has been created focusing on budgeting and visualizing the effects of spending and saving. The concept is represented by planting a tree and fruit to symbolize the growth of money and daily expenditures. With various charts and icons, this design approach aims to create a personalized experience for students and help them grow their money in the best way that fits their needs.</p>
                    <Image src={midfi} alt="" width={100} height={400} className={styles.midfiImage} />
                </div>
            </div>
            <div className={`${styles.redesign} ${styles.section}`}>
                <div className={`${styles.redesignTitle} ${styles.heading}`}>Redesign: Collaboration with Developers</div>
                <div className={`${styles.redesignBody} ${styles.body}`}>
                    The designers and developers had a close working relationship in this project. Due to the tight timeline, the app needed to be deployed in just four months. Therefore, both parties agreed to delay the planting and tree features to a "future possible development" phase. Instead, the team decided to redesign the app and focus on one MVP feature that could enhance daily spending and managing processes. This transition ultimately led to the success of the entire project.
                </div>
                {/* <Image src="/" alt="" width={100} height={400} className={styles.problemImage} /> */}
            </div>
            <div className={`${styles.design} ${styles.section}`}>
                <div className={`${styles.subGrid}`}>
                    <Image src={branding_logo} alt="" width={80} height={400} className={styles.logoImage} />
                    <div className={`${styles.subBody}`}>
                        <h4>Logo</h4>
                        <p>The previous logo for pitching used the letter M in bright orange. Although the M had a unique typeface, it failed to convey the stability and financial aspect of the brand. The new logo design takes a different approach by showcasing financial growth through a bar chart. A single seed represents <span style={{ fontWeight: '800' }}>budgeting and saving</span>. The new main color is a green gradient, symbolizing the safety of one's money.</p>
                    </div>
                </div>
                <div className={`${styles.subGrid}`}>
                    <div className={`${styles.subBody}`}>
                        <h4>Color Palette</h4>
                        <p>For an app targeting post-secondary students for budgeting and financing, the colour palette aims to evoke <span style={{ fontWeight: "800" }}>a sense of calm, trust, and financial stability</span> while maintaining visual interest and accessibility. The primary colours, dusty teal and money jade green, exude a soothing yet fresh atmosphere reminiscent of growth, prosperity, and stability. Dusty teal brings a hint of sophistication and tranquillity. At the same time, money jade green symbolizes financial wellness and growth, aligning perfectly with the app's purpose of empowering students to manage their finances wisely.
                        </p>
                    </div>
                    <Image src={color} alt="" width={100} height={400} className={styles.colorImage} />
                </div>
                <div className={`${styles.subGrid}`}>
                    <Image src={typeface} alt="" width={80} height={400} className={styles.fontImage} />
                    <div className={`${styles.subBody}`}>
                        <h4>Typography</h4>
                        <p>With clean lines and a modern design, <span style={{ fontWeight: '800' }}>Montserrat balances professionalism and friendliness</span>, catering perfectly to our audience's preferences. Its versatility ensures legibility across various screen sizes, while its distinct letterforms aid in quickly scanning information, facilitating efficient financial management. With an extensive range of font weights and styles, Montserrat clearly differentiates content hierarchy, promoting intuitive navigation and comprehension. </p>
                    </div>
                </div>
                <div className={`${styles.subSection}`}>
                    <h4 style={{ paddingBottom: '2rem' }}>Style Guide</h4>
                    <iframe style={{ borderStyle: 'none', boxShadow: '0px 0px 20px rgba(200, 200, 200, 1)' }} width="100%" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnLUHFMOfRNvhgnTPQj81Qv%2FMoneyment%3Ftype%3Ddesign%26node-id%3D951-62248%26t%3D9dtaNZKLI8wyjQUm-1%26scaling%3Dscale-down-width%26page-id%3D841%253A53615%26mode%3Ddesign%26hide-ui%3D1" allowfullscreen></iframe>
                </div>

                <div className={`${styles.subSection}`}>
                    <h4>Prototype</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim. Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue</p>
                    <Image src={midfi} alt="" width={100} height={400} className={styles.wireframeImage} />
                </div>

            </div>
            <div className={`${styles.outcome} ${styles.section}`}>
                <div className={`${styles.outcomeTitle} ${styles.heading}`}>Outcome</div>
                <div className={`${styles.outcomeBody} ${styles.body}`}>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim.</div>
            </div>
            <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
            <div className={`${styles.wrapup} ${styles.section}`}>
                <div className={`${styles.wrapupTitle} ${styles.heading}`}>Wrap Up</div>
                <div className={`${styles.wrapupBody} ${styles.body}`}>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim.</div>
                <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
            </div>
        </div >
    )
}