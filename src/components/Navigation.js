export const Navigation = () => {
    return `
        <header class="navbar">
            <div class="container nav-container">
                <a href="#/" class="logo">
                    FRENZ<span>.</span>
                </a>
                <nav class="nav-links">
                    <a href="#/" class="active">Home</a>
                    <a href="#/bilingual-programmes">Bilingual Programmes</a>
                    <a href="#/schools">Schools</a>
                    <a href="#/costs">Costs</a>
                    <a href="#/about">About us</a>
                    <a href="#/about" class="btn btn-primary" style="color: white; padding: 0.5rem 1.2rem; margin-left: 1rem;">Donate</a>
                </nav>
                <button class="mobile-menu-btn" aria-label="Toggle Navigation">
                    ☰
                </button>
            </div>
        </header>
    `;
};
