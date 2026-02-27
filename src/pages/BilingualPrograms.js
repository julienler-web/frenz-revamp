export default function BilingualPrograms() {
    return `
        <div class="page fade-in">
            <!-- Header -->
            <section class="section-padding text-center" style="background: var(--soft-peach); padding-bottom: 3rem;">
                <div class="container">
                    <h1 class="mb-3" style="font-size: 3rem; color: var(--warm-red);">Bilingual Programmes</h1>
                    <p class="text-secondary" style="font-size: 1.25rem; max-width: 800px; margin: 0 auto;">
                        French programmes across New Zealand, structured to support your child's learning from pre-school through intermediate.
                    </p>
                </div>
            </section>

            <!-- Age Groups -->
            <section class="section-padding">
                <div class="container">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        <!-- 0 to 5 -->
                        <div class="glass" style="padding: 2.5rem; border-radius: 20px; text-align: center; border-top: 4px solid var(--warm-yellow);">
                            <h3 class="mb-2">0 to 5 Years Old</h3>
                            <p class="mb-4 text-secondary">Weekly French playgroup. <em>Les Petits Lascars</em> in Auckland provides parents and children a place to play, learn and socialise in a 100% French environment.</p>
                            <a href="https://www.petitslascars.co.nz/" target="_blank" class="btn btn-outline">Find out more</a>
                        </div>
                        
                        <!-- 5 to 11 -->
                        <div class="glass" style="padding: 2.5rem; border-radius: 20px; text-align: center; border-top: 4px solid var(--warm-orange);">
                            <h3 class="mb-2">5 to 11 Years Old</h3>
                            <p class="mb-4 text-secondary">Frenz supports the bilingual programmes of 5 public primary schools across New Zealand. Each school provides children with 18 hr/week of education in French for 6 years.</p>
                            <a href="#/schools" class="btn btn-primary">View Primary Schools</a>
                        </div>
                        
                        <!-- 11 to 13 -->
                        <div class="glass" style="padding: 2.5rem; border-radius: 20px; text-align: center; border-top: 4px solid var(--warm-red);">
                            <h3 class="mb-2">11 to 13 Years Old</h3>
                            <p class="mb-4 text-secondary">French-English bilingual programme is offered in Kowhai Intermediate School in Auckland Central and Haeata Community Campus in Christchurch.</p>
                            <a href="#/schools" class="btn btn-secondary">View Intermediate Schools</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Why Bilingual Education -->
            <section class="section-padding" style="background: var(--blue); color: white;">
                <div class="container">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem; align-items: center;">
                        <div>
                            <h2 class="mb-4" style="color: white; font-size: 2.5rem;">Why Choose Bilingual Education?</h2>
                            <h3 class="mb-2" style="color: var(--warm-yellow);">More than maintaining a minority language</h3>
                            <p class="mb-4" style="opacity: 0.9;">
                                With bilingual education, your children will have native speaker proficiency in all academic subjects in both French and English.
                            </p>
                            <h3 class="mb-2" style="color: var(--warm-orange);">Academic Advantage</h3>
                            <p style="opacity: 0.9;">
                                Studies in language development show that young children with exposure to more than one language at an early age are at a distinct advantage throughout life. Learning becomes intuitive across multiple disciplines.
                            </p>
                        </div>
                        <div style="background: rgba(255,255,255,0.1); padding: 3rem; border-radius: 24px; backdrop-filter: blur(10px);">
                            <h3 class="mb-3" style="color: white;">Who is it for?</h3>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 1rem; display: flex; align-items: start; gap: 1rem;">
                                    <span style="color: var(--warm-yellow);">✓</span>
                                    <span>Francophone families seeking to maintain their heritage tongue while integrating.</span>
                                </li>
                                <li style="margin-bottom: 1rem; display: flex; align-items: start; gap: 1rem;">
                                    <span style="color: var(--warm-yellow);">✓</span>
                                    <span>Kiwi families recognizing the global advantages of speaking a widely used international language.</span>
                                </li>
                                <li style="display: flex; align-items: start; gap: 1rem;">
                                    <span style="color: var(--warm-yellow);">✓</span>
                                    <span>Any child ready to dive into a rich, supportive, and engaging educational environment.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}
