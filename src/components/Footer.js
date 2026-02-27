export const Footer = () => {
    return `
        <footer>
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <h4 style="color: var(--blue);">FRENZ</h4>
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                            Supporting French-English bilingual education in New Zealand public schools since 1994.
                        </p>
                        <a href="https://www.frenzschool.org.nz" target="_blank" style="color: var(--warm-orange); font-weight: 600;">Original Site</a>
                    </div>
                    <div class="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#/">Home</a></li>
                            <li><a href="#/bilingual-programmes">Bilingual Programmes</a></li>
                            <li><a href="#/schools">Partner Schools</a></li>
                            <li><a href="#/costs">Costs & Donations</a></li>
                            <li><a href="#/about">About Us</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="mailto:info@frenzschool.org.nz">info@frenzschool.org.nz</a></li>
                            <li style="color: var(--text-secondary);">Auckland, Wellington, Christchurch</li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} FRENZ School Inc. Redeveloped as an interactive modern web app.</p>
                </div>
            </div>
        </footer>
    `;
};
