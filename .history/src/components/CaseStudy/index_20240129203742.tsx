import Image from "next/image"
import styles from './casestudy.module.css'
import banner from "../../../public/image/moneyment/banner2.webp"
import icons from "../../../public/image/moneyment/titleicon.webp"
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
                        <div className={`${styles.introBody}`}>The project's main objective was to design a financial and budgeting application specifically for post-secondary students. The application was powered by Artificial Intelligence (AI) technology and aimed to provide personalized financial recommendations and strategies to help improve students' financial well-being. The goal was to create a revolutionary financial empowerment app to uplift students' lives.                        </div>
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
                <div className={`${styles.problemTitle} ${styles.heading}`}>Problem</div>
                <div className={`${styles.problemBody} ${styles.body}`}>The financial stress among Canadians is a significant problem that affects many individuals and families. According to Statistics Canada (2022), one-third of Canadians struggle to meet their financial needs, and one-quarter of Canadians cannot cover an unexpected $500 expense. Furthermore, certain disadvantaged groups, including 57% of young Canadians, are especially struggling with their financial situation, indicating that this issue is affecting a broad range of Canadians.

                    The problem of financial stress can have a severe impact on individuals' mental and physical well-being, leading to anxiety, depression, and other health issues. Moreover, it can also affect their productivity at work, leading to decreased performance and an increased risk of job loss. This problem is particularly concerning given that many Canadians are optimistic about improving their finances, with 37% of Canadians in financial stress remaining highly optimistic. However, only 25% of them believe that their financial situation can improve within one year, indicating a lack of confidence in their ability to overcome this problem.

                    Addressing the issue of financial stress requires a comprehensive approach that includes financial education, access to affordable credit, and support for disadvantaged groups. By providing individuals with the necessary tools and resources to manage their finances effectively, we can help alleviate financial stress and improve the overall well-being of Canadians.</div>
                <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
            </div>
            <div className={`${styles.research} ${styles.section}`}>
                <div className={`${styles.researchTitle} ${styles.heading}`}>Research</div>
                <div className={`${styles.researchBody} ${styles.body}`}>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim.</div>
                <div className={`${styles.subGrid}`}>
                    <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
                    <div className={`${styles.subBody}`}>
                        <h4>Survey</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim. Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue</p>
                    </div>
                </div>
                <div className={`${styles.subGrid}`}>
                    <div className={`${styles.subBody}`}>
                        <h4>Finding</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim. Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue</p>
                    </div>
                    <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
                </div>
                <div className={`${styles.subSection}`}>
                    <h4>User Story</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim. Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue</p>
                    <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
                </div>
                <div className={`${styles.subSection}`}>
                    <h4>Persona</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim. Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue</p>
                    <Image src="/" alt="" width={100} height={400} className={styles.problemImage} />
                </div>
            </div>
            <div className={`${styles.design} ${styles.section}`}>
                <div className={`${styles.designTitle} ${styles.heading}`}>Design</div>
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