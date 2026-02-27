export default function Home() {
    return `
        <div class="page home-page fade-in">
            <!-- Hero Section -->
            <section class="hero-section" style="
                background: linear-gradient(135deg, rgba(0,35,149,0.9) 0%, rgba(217,56,67,0.85) 100%), url('https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80') center/cover;
                padding: 8rem 0;
                color: white;
                text-align: center;
                border-bottom-left-radius: 50px;
                border-bottom-right-radius: 50px;
            ">
                <div class="container glass" style="padding: 3rem; border-radius: 24px; max-width: 800px; animation: slideDown 0.6s ease-out;">
                    <h1 class="text-white mb-3" style="font-size: 3.5rem; letter-spacing: -1px;">
                        Bilingual Education for a <span style="color: var(--warm-yellow)">Brighter Future</span>
                    </h1>
                    <p class="mb-4" style="font-size: 1.25rem; font-weight: 300;">
                        Supporting French-English bilingual education in New Zealand public schools since 1994. Give your child the academic advantage and lifelong benefits of two languages.
                    </p>
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <a href="#/schools" class="btn btn-primary">Find a School</a>
                        <a href="#/bilingual-programmes" class="btn btn-outline" style="color: white; border-color: white;">Why Bilingual?</a>
                    </div>
                </div>
            </section>

            <!-- Who We Are -->
            <section class="section-padding">
                <div class="container">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem; align-items: center;">
                        <div>
                            <h2 class="mb-3">Who We Are</h2>
                            <p class="text-secondary mb-3">
                                Frenz is a not-for-profit organization helping public schools across New Zealand open and operate quality French-English bilingual programs. The bilingual units are fully integrated within each school, with students participating in all aspects of school life.
                            </p>
                            <p class="text-secondary mb-4">
                                Bilingual education offers children the opportunity to become proficient in all academic subjects in both languages.
                            </p>
                            <a href="#/about" class="btn btn-secondary">Learn More About Us</a>
                        </div>
                        <div style="position: relative;">
                            <div style="position: absolute; inset: -10px; background: linear-gradient(135deg, var(--blue), var(--warm-orange)); filter: blur(20px); opacity: 0.3; border-radius: 24px;"></div>
                            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" alt="Students learning" style="border-radius: 24px; position: relative; z-index: 1; box-shadow: var(--shadow-lg);">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Benefits -->
            <section class="section-padding" style="background-color: var(--bg-secondary);">
                <div class="container">
                    <h2 class="text-center mb-5">The Bilingual Advantage</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        <!-- Card 1 -->
                        <div class="glass" style="padding: 2.5rem; border-radius: 20px; transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="width: 50px; height: 50px; background: var(--soft-peach); color: var(--warm-orange); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1.5rem;">
                                🚀
                            </div>
                            <h3 class="mb-2">Smooth Transition</h3>
                            <p class="text-secondary">Bilingual education provides children who do not speak English a smooth transition to life in New Zealand. They learn English in a safe environment without language barriers hindering friendships.</p>
                        </div>
                        <!-- Card 2 -->
                        <div class="glass" style="padding: 2.5rem; border-radius: 20px; transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="width: 50px; height: 50px; background: #e0e7ff; color: var(--blue); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1.5rem;">
                                🧠
                            </div>
                            <h3 class="mb-2">Lifelong Learning</h3>
                            <p class="text-secondary">The brain ages more slowly and employment rates are higher in adults with bilingual capacities. Set kids up for success and strengthen long-term brain health.</p>
                        </div>
                        <!-- Card 3 -->
                        <div class="glass" style="padding: 2.5rem; border-radius: 20px; transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="width: 50px; height: 50px; background: #ffe4e6; color: var(--red); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1.5rem;">
                                ❤️
                            </div>
                            <h3 class="mb-2">Developing Empathy</h3>
                            <p class="text-secondary">Bilingual children have to follow social cues to figure out which language to use. They demonstrate a head start in empathy, perspective-taking, and emotional skills.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}
