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
            {/* <ParallaxProvider />
            <Parallax speed={-30} className={styles.coverContainer}>
                <Image src={banner} alt="" className={styles.projectCover} objectFit={'contain'} />
            </Parallax> */}
            <ParallaxBanner style={{ aspectRatio: '2 / 1', width: '50%' }} className={styles.coverContainer}>
                <ParallaxBannerLayer image={banner.src} speed={-20} className={styles.projectCover} style={{ aspectRatio: '2 / 1', width: '120%', objectFit: 'contain' }} />
            </ParallaxBanner>

            <div className={`${styles.titleSection}`}>
                <div className={`${styles.projetTitle}`}>Moneyment
                    <Image src={icons} alt="" className={styles.projecticon} objectFit={'contain'} />
                </div>
                <h3 className={styles.projectTag}>Budget today, save for tomorrow</h3>
                <div className={styles.projectInfo}>
                    <div>ROLE
                        <div>UI & UX Designer<br />Brand Designer</div>
                    </div>
                    <div>DURATION
                        <div>4 months</div>
                    </div>
                    <div>SKILLS
                        <div>Planning and Execution</div>
                        <div>Interactive Prototyping</div>
                        <div>UI & UX Design</div>
                        <div>Collaboration</div>
                        <div>Marketing</div>
                    </div>
                </div>
            </div>

            <div className={`${styles.introduction}`}>
                <div className={`${styles.introTitle} ${styles.heading}`}>Intorduction</div>
                <div className={`${styles.introBody} ${styles.body}`}>This project starts in 2022 by developing an embedded shopping experience within the Order Tracking screen.
                    This way, we provide the user with the possibility to complete their restaurant order with products from other nearby supermarkets.</div>
            </div>
            <div className={`${styles.process} ${styles.section}`}>
                <div className={`${styles.processTitle} ${styles.heading}`}>Timeline</div>
                <Image src="/" alt="" width={100} height={400} className={styles.timelineImage} />
            </div>
            <div className={`${styles.problem} ${styles.section}`}>
                <div className={`${styles.problemTitle} ${styles.heading}`}>Problem</div>
                <div className={`${styles.problemBody} ${styles.body}`}>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim.</div>
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