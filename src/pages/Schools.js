export default function Schools() {
    return `
        <div class="page fade-in">
            <section class="section-padding text-center" style="background: linear-gradient(135deg, var(--blue), #1e3a8a); color: white; padding-bottom: 4rem;">
                <div class="container">
                    <h1 class="mb-3" style="color: white; font-size: 3rem;">Partner Schools</h1>
                    <p style="font-size: 1.25rem; max-width: 700px; margin: 0 auto; opacity: 0.9;">
                        Discover our network of public schools across New Zealand hosting integrated FRENZ bilingual programmes.
                    </p>
                </div>
            </section>

            <section class="section-padding" style="margin-top: -3rem;">
                <div class="container">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
                        
                        <!-- Auckland North -->
                        <div class="glass" style="padding: 2.5rem; border-radius: 20px; background: white; box-shadow: var(--shadow-md);">
                            <div style="display: inline-block; padding: 0.5rem 1rem; background: var(--soft-peach); color: var(--warm-red); border-radius: 20px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                                North Auckland
                            </div>
                            <h3 class="mb-2">Birkdale North School</h3>
                            <p class="text-secondary mb-3"><em>Étoile du Nord</em> programme</p>
                            <p class="text-secondary mb-4">A supportive environment providing comprehensive bilingual primary education in Auckland's North Shore.</p>
                            <a href="#/contact" class="btn btn-outline" style="width: 100%;">Enquire</a>
                        </div>

                        <!-- Auckland Central Primary -->
                        <div class="glass" style="padding: 2.5rem; border-radius: 20px; background: white; box-shadow: var(--shadow-md);">
                            <div style="display: inline-block; padding: 0.5rem 1rem; background: #e0f2fe; color: #0284c7; border-radius: 20px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                                Auckland Central
                            </div>
                            <h3 class="mb-2">Richmond Road School</h3>
                            <p class="text-secondary mb-3"><em>L'Archipel</em> programme</p>
                            <p class="text-secondary mb-4">Pioneering bilingual education right in the heart of Auckland, nurturing global citizens.</p>
                            <a href="#/contact" class="btn btn-outline" style="width: 100%;">Enquire</a>
                        </div>

                        <!-- Auckland Central Intermediate -->
                        <div class="glass" style="padding: 2.5rem; border-radius: 20px; background: white; box-shadow: var(--shadow-md);">
                            <div style="display: inline-block; padding: 0.5rem 1rem; background: #e0f2fe; color: #0284c7; border-radius: 20px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                                Auckland Central
                            </div>
                            <h3 class="mb-2">Kowhai Intermediate</h3>
                            <p class="text-secondary mb-3">Years 7 & 8</p>
                            <p class="text-secondary mb-4">Continuing the bilingual journey for older students as they prepare for high school.</p>
                            <a href="#/contact" class="btn btn-outline" style="width: 100%;">Enquire</a>
                        </div>

                        <!-- Wellington -->
                        <div class="glass" style="padding: 2.5rem; border-radius: 20px; background: white; box-shadow: var(--shadow-md);">
                            <div style="display: inline-block; padding: 0.5rem 1rem; background: #dcfce7; color: #16a34a; border-radius: 20px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                                Wellington
                            </div>
                            <h3 class="mb-2">Tawatawa Ridgway School</h3>
                            <p class="text-secondary mb-3"><em>Ruru La Chouette</em> programme</p>
                            <p class="text-secondary mb-4">Bringing quality French-English education to the capital in a tight-knit community setting.</p>
                            <a href="#/contact" class="btn btn-outline" style="width: 100%;">Enquire</a>
                        </div>

                        <!-- Christchurch Primary -->
                        <div class="glass" style="padding: 2.5rem; border-radius: 20px; background: white; box-shadow: var(--shadow-md);">
                            <div style="display: inline-block; padding: 0.5rem 1rem; background: #fef3c7; color: #d97706; border-radius: 20px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                                Christchurch
                            </div>
                            <h3 class="mb-2">Tuia Burnside School</h3>
                            <p class="text-secondary mb-3"><em>La Découverte</em> programme</p>
                            <p class="text-secondary mb-4">A rich cultural and academic bilingual experience for students in the South Island.</p>
                            <a href="#/contact" class="btn btn-outline" style="width: 100%;">Enquire</a>
                        </div>

                        <!-- Christchurch Intermediate/High School -->
                        <div class="glass" style="padding: 2.5rem; border-radius: 20px; background: white; box-shadow: var(--shadow-md);">
                            <div style="display: inline-block; padding: 0.5rem 1rem; background: #fef3c7; color: #d97706; border-radius: 20px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                                Christchurch
                            </div>
                            <h3 class="mb-2">Haeata Campus</h3>
                            <p class="text-secondary mb-3">Community Campus Programme</p>
                            <p class="text-secondary mb-4">Extending opportunities for older learners with a comprehensive bilingual curriculum.</p>
                            <a href="#/contact" class="btn btn-outline" style="width: 100%;">Enquire</a>
                        </div>

                    </div>
                </div>
            </section>
            
            <!-- Quick Info -->
            <section class="section-padding bg-secondary" style="background: var(--bg-secondary); border-top: 1px solid var(--border-light);">
                <div class="container text-center">
                    <h2 class="mb-3">Enrolment Process</h2>
                    <p class="text-secondary mb-4" style="max-width: 600px; margin: 0 auto;">
                        Enrolment in the French bilingual units follows standard New Zealand public school zoning guidelines. However, out-of-zone enrolment is often available due to the special nature of the programme.
                    </p>
                    <a href="#/costs" class="btn btn-primary">View Costs & Membership</a>
                </div>
            </section>
        </div>
    `;
}
