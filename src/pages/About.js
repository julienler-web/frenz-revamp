export default function About() {
    return `
        <div class="page fade-in">
            <!-- Header Section -->
            <section class="section-padding text-center" style="background: linear-gradient(135deg, var(--blue), var(--warm-red)); color: white; padding-bottom: 4rem;">
                <div class="container">
                    <h1 class="mb-3" style="color: white; font-size: 3rem;">About FRENZ</h1>
                    <p style="font-size: 1.25rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">
                        We are a registered New Zealand Charity (CC34502) run by a volunteer committee working in partnership with the Ministry of Education and the French Embassy.
                    </p>
                </div>
            </section>

            <!-- Mission & Commitee layout -->
            <section class="section-padding" style="margin-top: -3rem;">
                <div class="container">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem;">
                        
                        <!-- Mission -->
                        <div class="glass" style="padding: 3rem; border-radius: 20px; background: white; box-shadow: var(--shadow-lg);">
                            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎯</div>
                            <h2 class="mb-3">What We Do</h2>
                            <p class="text-secondary mb-3">
                                Frenz assists schools in recruiting qualified and experienced teachers native to a French-speaking country, and we help fund their salaries.
                            </p>
                            <p class="text-secondary">
                                By ensuring teachers hold appropriate qualifications recognised by the New Zealand Teachers Council, we maintain a high standard of education while bringing rich cultural diversity into the classroom.
                            </p>
                        </div>

                        <!-- Committee -->
                        <div class="glass" style="padding: 3rem; border-radius: 20px; background: white; box-shadow: var(--shadow-lg);">
                            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🤝</div>
                            <h2 class="mb-3">Our Committee</h2>
                            <p class="text-secondary mb-3">
                                FRENZ operates primarily through the dedication of volunteer parents who run the National Committee and regional sub-committees aligned with our partner schools.
                            </p>
                            <p class="text-secondary mb-4">
                                Interested in helping out? We are always looking for passionate individuals to join us in supporting bilingual education.
                            </p>
                            <a href="#/contact" class="btn btn-primary" style="background: var(--warm-orange); border: none;">Get Involved</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Contact Form Section -->
            <section class="section-padding" style="background: var(--bg-secondary);">
                <div class="container">
                    <div style="max-width: 600px; margin: 0 auto; background: white; padding: 3rem; border-radius: 24px; box-shadow: var(--shadow-md);">
                        <h2 class="text-center mb-4">Contact Us</h2>
                        <form onsubmit="event.preventDefault(); alert('This is a demonstration form.');">
                            <div class="mb-3">
                                <label for="name" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-secondary);">Name</label>
                                <input type="text" id="name" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-light); border-radius: 8px; font-family: var(--font-sans);" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-secondary);">Email</label>
                                <input type="email" id="email" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-light); border-radius: 8px; font-family: var(--font-sans);" required>
                            </div>
                            <div class="mb-4">
                                <label for="message" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--text-secondary);">Message</label>
                                <textarea id="message" rows="5" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-light); border-radius: 8px; font-family: var(--font-sans); resize: vertical;" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    `;
}
