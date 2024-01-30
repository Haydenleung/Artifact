import Image from "next/image"
import styles from './casestudy.module.css'

export default function CaseStudy() {
    return (
        <div className={styles.project}>
            <div className={`${styles.titleSection}`}>
                <h1 className={`${styles.projetTitle}`}>PROJECT TITLE</h1>
                <h3 className={styles.projectTag}>Tagline</h3>
                <div className={styles.projectInfo}>
                    <div>ROLE
                        <div>Lorem ipsum</div>
                    </div>
                    <div>DURATION
                        <div>Lorem ipsum</div>
                    </div>
                    <div>SKILLS
                        <div>Lorem ipsum</div>
                    </div>
                </div>
            </div>
            <Image src="/" alt="" width={100} height={500} className={styles.projectCover} />
            <div className={`${styles.introduction}`}>
                <div className={`${styles.introTitle} ${styles.heading}`}>Intorduction</div>
                <div className={`${styles.introBody} ${styles.body}`}>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim.</div>
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

        </div >
    )
}