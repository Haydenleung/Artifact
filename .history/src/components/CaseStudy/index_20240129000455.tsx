import Image from "next/image"
import styles from './casestudy.module.css'

export default function CaseStudy() {
    return (
        <div className={styles.project}>
            <div className={styles.titleSection}>
                <h1 className={styles.projetTitle}>Project Title</h1>
                <h3 className={styles.projectTag}>Tagline</h3>
                <div className={styles.projectInfo}>
                    <div>ROLE
                        <div>123</div>
                    </div>
                    <div>DURATION</div>
                    <div>SKILLS</div>
                </div>
                <Image src="/" alt="" width={100} height={500} />
            </div>
            <div className={styles.introduction}>
                <div className={styles.introTitle}>Intorduction</div>
                <div className={styles.introBody}>Lorem ipsum dolor sit amet consectetur. Vulputate amet eu nunc dui. Cras tempus etiam vehicula non ut amet semper sit. Suspendisse ultricies duis nullam et varius sed pellentesque in id. Quis vel eu malesuada nisl etiam. Non in sem odio quis vehicula posuere. Quis adipiscing molestie nulla augue vestibulum porta et. Duis proin tortor vitae lorem eget. Urna sit at nec montes dignissim.</div>
            </div>
            <div className={styles.process}>
                <div className={styles.processTitle}>Intorduction</div>
                <Image src="/" alt="" width={100} height={100} />
            </div>
        </div>
    )
}