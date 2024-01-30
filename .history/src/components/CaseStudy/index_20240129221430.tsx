import Image from "next/image"
import styles from './casestudy.module.css'
import banner from "../../../public/image/moneyment/banner2.webp"
import icons from "../../../public/image/moneyment/titleicon.webp"
import persona_A from "../../../public/image/moneyment/persona1.svg"
import persona_B from "../../../public/image/moneyment/persona2.svg"
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
                        <h4>User Survey & Findings</h4>
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
            <div className={`${styles.design} ${styles.section}`}>
                <div className={`${styles.designTitle} ${styles.heading}`}>Design</div>
                <iframe style={{ borderStyle: 'none' }} width="100%" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnLUHFMOfRNvhgnTPQj81Qv%2FMoneyment%3Ftype%3Ddesign%26node-id%3D951-62248%26t%3D9dtaNZKLI8wyjQUm-1%26scaling%3Dscale-down-width%26page-id%3D841%253A53615%26mode%3Ddesign" allowfullscreen></iframe>
                <div className={`${styles.designBody} ${styles.body}`}>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim.</div>
                <div className={`${styles.subGrid}`}>
                    <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
                    <div className={`${styles.subBody}`}>
                        <h4>Branding</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim. Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue</p>
                    </div>
                </div>
                <div className={`${styles.subGrid}`}>
                    <div className={`${styles.subBody}`}>
                        <h4>Logo</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim. Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue</p>
                    </div>
                    <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
                </div>
                <div className={`${styles.subSection}`}>
                    <h4>Wireframe</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim. Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue</p>
                    <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
                </div>
                <div className={`${styles.subSection}`}>
                    <h4>Prototype</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim. Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue</p>
                    <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
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