export default function Costs() {
    return `
        <div class="page fade-in">
            <!-- Header Section -->
            <section class="section-padding" style="background: var(--soft-peach);">
                <div class="container text-center">
                    <h1 class="mb-3" style="color: var(--warm-red); font-size: 3rem;">Costs & Memberships</h1>
                    <p class="text-secondary" style="font-size: 1.25rem; max-width: 700px; margin: 0 auto;">
                        Our bilingual programmes are integrated into the New Zealand public school system, making them highly accessible.
                    </p>
                </div>
            </section>

            <!-- Cost Comparison and Details -->
            <section class="section-padding">
                <div class="container">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; align-items: start;">
                        
                        <div>
                            <h2 class="mb-4">Why are there costs?</h2>
                            <p class="text-secondary mb-3">
                                Public schools in New Zealand are funded to deliver the standard English-medium curriculum. To provide a quality 18-hours-a-week French programme, schools need to employ dedicated bilingual, natively-fluent teachers and access specialized French educational resources.
                            </p>
                            <p class="text-secondary mb-4">
                                FRENZ acts to bridge this funding gap through parental donations and memberships.
                            </p>
                            
                            <div class="glass" style="padding: 2rem; border-radius: 16px; border-left: 4px solid var(--warm-orange); background: white;">
                                <h3 class="mb-2" style="font-size: 1.25rem;">How are the donations used?</h3>
                                <ul style="list-style: none; padding: 0;">
                                    <li class="text-secondary mb-2">💰 <strong>80%</strong> directly funds the bilingual teaching staff salaries</li>
                                    <li class="text-secondary mb-2">📚 <strong>15%</strong> goes to classroom resources, books, and software</li>
                                    <li class="text-secondary">🏢 <strong>5%</strong> for administrative and advocacy overhead by FRENZ</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div style="background: white; border-radius: 24px; padding: 3rem; box-shadow: var(--shadow-lg); text-align: center; border: 2px solid var(--border-light);">
                                <h2 class="mb-2" style="font-size: 2rem;">FRENZ Membership</h2>
                                <p class="text-secondary mb-4">Required for all families enrolled in a bilingual unit.</p>
                                
                                <div style="font-size: 3rem; font-weight: 800; color: var(--blue); line-height: 1; margin-bottom: 1.5rem;">
                                    Annual <br><span style="font-size: 1.5rem; color: var(--text-secondary); font-weight: 400;">Donation per child</span>
                                </div>
                                <p class="text-secondary mb-4" style="font-size: 0.875rem;">
                                    * Exact costs vary slightly by school location and structure. Please inquire for specific figures. As FRENZ is a registered charity, your donation qualifies for a 33% tax rebate in NZ.
                                </p>
                                
                                <a href="https://www.frenzschool.org.nz/membership" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 1.125rem;">Become a Member / Donate</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    `;
}
