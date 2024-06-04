import { EducationList } from "@/components/education"
import { ProjectList } from "@/components/project"
import { AchievementList } from "@/components/achievement"

import Link from "next/link"

export function Content(){
    return(
        <div className="d-grid gap-3">
            <div className="bg-light bg-gradient shadow-5 p-3">
                <h3>Hello there 👋🏻</h3>
                <hr className="hr"/>
                <p>Passionate IT student proficient in <span className="bg-dark text-light p-1">Next.js</span>, <span className="bg-dark text-light p-1">React</span>, <span className="bg-dark text-light p-1">Prisma</span>, <span className="bg-dark text-light p-1">PostgreSQL</span>, <span className="bg-dark text-light p-1">Tailwind CSS</span>, and <span className="bg-dark text-light p-1">TypeScript</span>. Skilled in web development with a keen eye for design and detail. Experienced in CSS editing and proficient in photo manipulation. Strong problem-solving abilities and a commitment to delivering high-quality projects</p>
            </div>
            <div className="bg-light bg-gradient shadow-5 p-3">
                <h3>My Education 🎓</h3>
                <hr className="hr"/>
                <EducationList />
            </div>
            <div className="bg-light bg-gradient shadow-5 p-3">
                <h3>My Project 🗀</h3>
                <hr className="hr"/>
                <ProjectList />
            </div>
            <div className="bg-light bg-gradient shadow-5 p-3">
                <h3>My Achievement 🏆</h3>
                <hr className="hr"/>
                <AchievementList />
            </div>
            <div className="bg-light bg-gradient shadow-5 p-3">
                <h3>Contact me 📞</h3>
                <hr className="hr"/>
                <p>You can follow me in
                    <Link href="https://www.facebook.com" className="mx-2">
                        <i class="fa-brands fa-facebook fa-lg px-1"></i>
                        facebook
                    </Link>
                    and see my work at
                    <Link href="https://www.github.com" className="mx-2">
                        <i class="fa-brands fa-github fa-lg px-1"></i>
                        github
                    </Link>
                    and also on my overview details, you can see it on my 
                    <Link href="https://www.linkedin.com" className="mx-2">
                        <i class="fa-brands fa-linkedin fa-lg px-1"></i>
                        github.
                    </Link>
                    <br />
                    contact me here:
                    <Link href="mailto:carlbajo.2002@gmail.com" className="mx-2">
                        <i class="fa-solid fa-envelope fa-xl px-1"></i>
                        carlbajo.2002@gmail.com
                    </Link>
                </p>
            </div>
        </div>
    )
}