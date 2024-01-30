import Image from "next/image"
import styles from './casestudy.module.css'

export default function CaseStudy() {
    return (
        <div className={styles.project}>
            <div className={`${styles.titleSection} ${styles.section}`}>
                <h1 className={`${styles.projetTitle} ${styles.heading}`}>PROJECT TITLE</h1>
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
            <div className={`${styles.introduction} ${styles.section}`}>
                <div className={`${styles.introTitle} ${styles.heading}`}>Intorduction</div>
                <div className={`${styles.introBody} ${styles.body}`}>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim.</div>
            </div>
            <div className={`${styles.process} ${styles.section}`}>
                <div className={`${styles.introBody} ${styles.body}`}>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim.</div>
                <Image src="/" alt="" width={100} height={100} />
            </div>
        </div>
    )
}