// ==================== DATA ====================
const RECIPES_DATA = [{
        id: '1',
        title: 'Batata Frita Crocante na Airfryer',
        description: 'Batatas sequinhas e crocantes com muito menos óleo',
        image: 'https://images.unsplash.com/photo-1751262444163-a25a66cd2011?w=600',
        category: 'Receitas de Airfryer',
        prepTime: '25 min',
        servings: 4,
        difficulty: 'Fácil',
        calories: 180,
        author: 'Ana Paula',
        mood: 'rapido',
        goal: 'perda-peso',
        ingredients: ['4 batatas grandes', '1 colher de sopa de azeite', 'Sal a gosto', 'Temperos opcionais (páprica, alho em pó)'],
        instructions: ['Corte as batatas em palitos uniformes', 'Seque bem com papel toalha', 'Tempere com azeite e sal', 'Coloque na airfryer a 200°C por 20 minutos', 'Chacoalhe a cesta na metade do tempo', 'Sirva imediatamente']
    },
    {
        id: '2',
        title: 'Molho Pesto Caseiro',
        description: 'Molho italiano aromático com manjericão fresco',
        image: 'https://images.unsplash.com/photo-1697128370532-9447be09b6ce?w=600',
        category: 'Molhos e Acompanhamentos',
        prepTime: '15 min',
        servings: 6,
        difficulty: 'Fácil',
        calories: 120,
        author: 'Carlos Silva',
        mood: 'rapido',
        goal: 'energia',
        ingredients: ['2 xícaras de manjericão fresco', '1/2 xícara de parmesão ralado', '1/3 xícara de pinhões', '3 dentes de alho', '1/2 xícara de azeite'],
        instructions: ['Coloque o manjericão, alho e pinhões no processador', 'Pulse até ficar picado', 'Adicione o queijo', 'Adicione o azeite aos poucos', 'Tempere com sal e pimenta']
    },
    {
        id: '3',
        title: 'Salada Mediterrânea',
        description: 'Salada fresca com tomate, pepino e queijo feta',
        image: 'https://images.unsplash.com/photo-1589041611454-fd81bb39c3ba?w=600',
        category: 'Receitas de Verão',
        prepTime: '20 min',
        servings: 4,
        difficulty: 'Fácil',
        calories: 95,
        author: 'Maria Santos',
        mood: 'feliz',
        goal: 'perda-peso',
        ingredients: ['Alface', 'Tomates', 'Pepino', 'Queijo feta', 'Azeitonas', 'Azeite'],
        instructions: ['Lave e corte os vegetais', 'Misture todos os ingredientes', 'Tempere com azeite e limão', 'Sirva gelado']
    },
    {
        id: '4',
        title: 'Sorvete de Chocolate Artesanal',
        description: 'Sorvete cremoso de chocolate belga',
        image: 'https://images.unsplash.com/photo-1673551493011-2b5f771013d4?w=600',
        category: 'Sorvetes e Sobremesas Geladas',
        prepTime: '4h 30min',
        servings: 8,
        difficulty: 'Média',
        calories: 250,
        author: 'João Pereira',
        mood: 'celebrando',
        goal: 'energia',
        ingredients: ['Chocolate meio amargo', 'Leite condensado', 'Creme de leite', 'Leite'],
        instructions: ['Derreta o chocolate', 'Misture com leite condensado', 'Adicione creme de leite', 'Congele por 4 horas', 'Sirva gelado']
    },
    {
        id: '5',
        title: 'Bowl Vegano de Quinoa',
        description: 'Bowl nutritivo com quinoa e vegetais assados',
        image: 'https://images.unsplash.com/photo-1631281697078-e8f3d16e50e2?w=600',
        category: 'Receitas Veganas',
        prepTime: '35 min',
        servings: 2,
        difficulty: 'Fácil',
        calories: 320,
        author: 'Beatriz Lima',
        mood: 'reconfortante',
        goal: 'ganho-massa',
        ingredients: ['Quinoa', 'Brócolis', 'Cenoura', 'Grão-de-bico', 'Tahine', 'Limão'],
        instructions: ['Cozinhe a quinoa', 'Asse os vegetais', 'Monte o bowl', 'Regue com molho de tahine']
    },
    {
        id: '6',
        title: 'Torta de Frutas Vermelhas',
        description: 'Sobremesa elegante perfeita para celebrações',
        image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600',
        category: 'Receitas Festivas',
        prepTime: '1h 15min',
        servings: 10,
        difficulty: 'Difícil',
        calories: 280,
        author: 'Laura Costa',
        mood: 'romantico',
        goal: 'energia',
        ingredients: ['Massa podre', 'Morangos', 'Mirtilos', 'Framboesas', 'Creme pasteleiro', 'Geleia'],
        instructions: ['Prepare a massa', 'Faça o creme', 'Asse a massa', 'Monte a torta com frutas', 'Finalize com geleia']
    }
];


const CATEGORIES_DATA = [
    { id: '1', name: 'Receitas de Airfryer', description: 'Pratos deliciosos e saudáveis preparados na fritadeira elétrica', image: 'https://images.unsplash.com/photo-1751262444163-a25a66cd2011?w=600' },
    { id: '2', name: 'Molhos e Acompanhamentos', description: 'Complementos perfeitos para suas refeições', image: 'https://images.unsplash.com/photo-1697128370532-9447be09b6ce?w=600' },
    { id: '3', name: 'Receitas de Verão', description: 'Pratos leves e refrescantes para dias quentes', image: 'https://images.unsplash.com/photo-1589041611454-fd81bb39c3ba?w=600' },
    { id: '4', name: 'Sorvetes e Sobremesas Geladas', description: 'Doces gelados para se refrescar', image: 'https://images.unsplash.com/photo-1673551493011-2b5f771013d4?w=600' },
    { id: '5', name: 'Receitas Veganas', description: 'Pratos 100% à base de plantas', image: 'https://images.unsplash.com/photo-1631281697078-e8f3d16e50e2?w=600' }
];


const MOODS_DATA = [
    { type: 'reconfortante', title: 'Reconfortantes', description: 'Receitas que aquecem o coração' },
    { type: 'rapido', title: 'Rápidas e Fáceis', description: 'Para quando o tempo é curto' },
    { type: 'romantico', title: 'Românticas', description: 'Jantares especiais a dois' },
    { type: 'celebrando', title: 'Celebrando', description: 'Para ocasiões especiais' }
];


const GOALS_DATA = [
    { type: 'perda-peso', title: 'Perda de Peso', description: 'Receitas balanceadas e saudáveis' },
    { type: 'ganho-massa', title: 'Ganho de Massa', description: 'Ricas em proteínas e nutrientes' },
    { type: 'rapido', title: 'Receitas Rápidas', description: 'Menos de 30 minutos' },
    { type: 'energia', title: 'Energia', description: 'Para manter-se ativo o dia todo' }
];


const HEALTH_TIPS = [
    { id: '1', title: 'Importância das Proteínas', description: 'Descubra como as proteínas são essenciais para a manutenção e crescimento muscular, e quais são as melhores fontes alimentares.', category: 'Nutrição', image: 'https://images.unsplash.com/photo-1540914124281-342587941389?w=800' },
    { id: '2', title: '5 Porções de Vegetais', description: 'Aprenda formas práticas de incluir mais vegetais no seu dia a dia e os benefícios de uma alimentação rica em fibras.', category: 'Alimentação', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800' },
    { id: '3', title: 'Hidratação Adequada', description: 'Entenda a importância de manter-se hidratado e como a água influencia no funcionamento do seu organismo.', category: 'Hidratação', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800' }
];


// ==================== SINGLETON PATTERN - USER MANAGER ====================
class UserManager {
    constructor() {
        if (UserManager.instance) return UserManager.instance;
        this.currentUser = null;
        this.loadUser();
        UserManager.instance = this;
    }


    static getInstance() {
        if (!UserManager.instance) new UserManager();
        return UserManager.instance;
    }


    login(name, email, password, userType) {
        const user = {
            id: Date.now().toString(),
            name: name,
            email: email,
            userType: userType,
            avatar: name.charAt(0).toUpperCase(),
            bio: '',
            phone: ''
        };
        this.currentUser = user;
        this.saveUser();
        return user;
    }


    updateUser(userData) {
        if (this.currentUser) {
            this.currentUser = {...this.currentUser, ...userData };
            this.saveUser();
        }
    }


    logout() {
        this.currentUser = null;
        localStorage.removeItem('cookBookUser');
    }


    getUser() {
        return this.currentUser;
    }


    isLoggedIn() {
        return this.currentUser !== null;
    }


    saveUser() {
        localStorage.setItem('cookBookUser', JSON.stringify(this.currentUser));
    }


    loadUser() {
        const saved = localStorage.getItem('cookBookUser');
        this.currentUser = saved ? JSON.parse(saved) : null;
    }
}


// ==================== SINGLETON PATTERN - FAVORITES MANAGER ====================
class FavoritesManager {
    constructor() {
        if (FavoritesManager.instance) return FavoritesManager.instance;
        this.favorites = new Set();
        this.loadFavorites();
        FavoritesManager.instance = this;
    }


    static getInstance() {
        if (!FavoritesManager.instance) new FavoritesManager();
        return FavoritesManager.instance;
    }


    toggleFavorite(recipeId) {
        if (this.favorites.has(recipeId)) {
            this.favorites.delete(recipeId);
            this.saveFavorites();
            return false;
        } else {
            this.favorites.add(recipeId);
            this.saveFavorites();
            return true;
        }
    }


    isFavorite(recipeId) {
        return this.favorites.has(recipeId);
    }


    getFavoriteRecipes() {
        return RECIPES_DATA.filter(recipe => this.favorites.has(recipe.id));
    }


    saveFavorites() {
        localStorage.setItem('cookBookFavorites', JSON.stringify(Array.from(this.favorites)));
    }


    loadFavorites() {
        const saved = localStorage.getItem('cookBookFavorites');
        this.favorites = new Set(saved ? JSON.parse(saved) : []);
    }
}


// ==================== SINGLETON PATTERN - ROUTER ====================
class Router {
    constructor() {
        if (Router.instance) return Router.instance;
        this.routes = new Map();
        this.init();
        Router.instance = this;
    }


    static getInstance() {
        if (!Router.instance) new Router();
        return Router.instance;
    }


    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }


    addRoute(path, handler) {
        this.routes.set(path, handler);
    }


    navigate(path) {
        window.location.hash = path;
    }


    handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        const [path, queryString] = hash.split('?');
        const queryParams = this.parseQuery(queryString);


        let handler = this.routes.get(path);


        if (!handler) {
            for (const [route, routeHandler] of this.routes) {
                if (route.includes(':')) {
                    const match = this.matchDynamicRoute(route, path);
                    if (match) {
                        Object.assign(queryParams, match);
                        handler = routeHandler;
                        break;
                    }
                }
            }
        }


        if (handler) {
            handler(queryParams);
        } else {
            this.routes.get('/')();
        }


        window.scrollTo(0, 0);
    }


    parseQuery(queryString) {
        const params = {};
        if (queryString) {
            queryString.split('&').forEach(param => {
                const [key, value] = param.split('=');
                params[key] = decodeURIComponent(value);
            });
        }
        return params;
    }


    matchDynamicRoute(route, path) {
        const routeParts = route.split('/');
        const pathParts = path.split('/');


        if (routeParts.length !== pathParts.length) return null;


        const params = {};
        for (let i = 0; i < routeParts.length; i++) {
            if (routeParts[i].startsWith(':')) {
                params[routeParts[i].slice(1)] = pathParts[i];
            } else if (routeParts[i] !== pathParts[i]) {
                return null;
            }
        }
        return params;
    }
}


// ==================== FACTORY PATTERN - ICONS ====================
const Icons = {
    chef: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path><line x1="6" y1="17" x2="18" y2="17"></line></svg>',
    search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>',
    sparkles: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>',
    user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
    heart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>',
    logout: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>',
    clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    arrowRight: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    arrowLeft: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
    plus: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
    x: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    edit: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',
    flame: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>'
};


// ==================== FACTORY PATTERN - COMPONENTS ====================
function createRecipeCard(recipe) {
    const favoritesManager = FavoritesManager.getInstance();
    const isFavorite = favoritesManager.isFavorite(recipe.id);


    return `
        <div class="recipe-card">
            <a href="#/receita/${recipe.id}" class="recipe-link">
                <div class="recipe-image-container">
                    <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" loading="lazy">
                    <button class="recipe-favorite ${isFavorite ? 'active' : ''}"
                            onclick="event.preventDefault(); event.stopPropagation(); handleFavoriteToggle('${recipe.id}')"
                            aria-label="Favoritar">
                        ${Icons.heart}
                    </button>
                    <span class="recipe-category-badge">${recipe.category}</span>
                </div>
                <div class="recipe-body">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <p class="recipe-description">${recipe.description}</p>
                    <div class="recipe-info">
                        <span class="recipe-info-item">${Icons.clock} ${recipe.prepTime}</span>
                        <span class="recipe-info-item">${Icons.users} ${recipe.servings} porções</span>
                        <span class="recipe-calories">${recipe.calories} kcal</span>
                    </div>
                    <div class="recipe-footer">
                        <span class="recipe-author">Por ${recipe.author}</span>
                        <span class="recipe-difficulty ${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
                    </div>
                </div>
            </a>
        </div>
    `;
}


function createCategoryCard(category) {
    return `
        <a href="#/categoria/${encodeURIComponent(category.name)}" class="category-card">
            <div class="category-image-wrapper">
                <img src="${category.image}" alt="${category.name}" class="category-image" loading="lazy">
                <div class="category-overlay"></div>
                <div class="category-content">
                    <div class="category-icon">${Icons.flame}</div>
                    <h3 class="category-name">${category.name}</h3>
                    <p class="category-desc">${category.description}</p>
                </div>
            </div>
        </a>
    `;
}


function createMoodCard(mood) {
    return `
        <a href="#/receitas-humor/${mood.type}" class="mood-card">
            <div class="mood-icon-wrapper">${Icons.heart}</div>
            <h3 class="mood-title">${mood.title}</h3>
            <p class="mood-description">${mood.description}</p>
        </a>
    `;
}


function createGoalCard(goal) {
    return `
        <a href="#/receitas-objetivos/${goal.type}" class="goal-card">
            <div class="goal-icon-wrapper">${Icons.sparkles}</div>
            <h3 class="goal-title">${goal.title}</h3>
            <p class="goal-description">${goal.description}</p>
        </a>
    `;
}


function createHealthCard(tip) {
    return `
        <div class="health-card">
            <img src="${tip.image}" alt="${tip.title}" class="health-image" loading="lazy">
            <div class="health-content">
                <span class="health-category">${tip.category}</span>
                <h3 class="health-title">${tip.title}</h3>
                <p class="health-description">${tip.description}</p>
            </div>
        </div>
    `;
}


// ==================== HEADER COMPONENT ====================
function renderHeader() {
    const userManager = UserManager.getInstance();
    const user = userManager.getUser();


    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="header-container">
            <div class="header-content">
                <a href="#/" class="logo">
                    ${Icons.chef}
                    <span class="logo-text">CookBook</span>
                </a>


                <form class="search-form" onsubmit="handleHeaderSearch(event)">
                    <div class="search-wrapper">
                        ${Icons.search}
                        <input type="text" id="headerSearchInput" class="search-input" placeholder="Buscar receitas, ingredientes...">
                    </div>
                </form>


                <nav class="nav">
                    <a href="#/dicas-saude" class="nav-btn">
                        ${Icons.sparkles}
                        Dicas de Saúde
                    </a>
                    ${user ? `
                        <div class="user-menu">
                            <button class="user-button" onclick="toggleUserDropdown()">
                                <div class="user-avatar">${user.avatar}</div>
                                <span>${user.name}</span>
                                ${user.userType ? `<span class="user-type-badge ${user.userType}">${user.userType === 'nutricionista' ? 'Nutricionista' : 'Usuário'}</span>` : ''}
                            </button>
                            <div class="user-dropdown" id="userDropdown">
                                <a href="#/perfil" class="user-dropdown-item">
                                    ${Icons.user}
                                    Meu Perfil
                                </a>
                                <a href="#" class="user-dropdown-item" onclick="event.preventDefault(); handleLogout()">
                                    ${Icons.logout}
                                    Sair
                                </a>
                            </div>
                        </div>
                    ` : `
                        <button class="btn-primary" onclick="openLoginModal()">
                            ${Icons.user}
                            Entrar
                        </button>
                    `}
                </nav>
            </div>
        </div>
    `;
}


// ==================== FOOTER COMPONENT ====================
function renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="footer-logo">
                        ${Icons.chef}
                        <span>CookBook</span>
                    </div>
                    <p class="footer-description">Uma comunidade culinária onde você descobre, compartilha e celebra receitas.</p>
                </div>
                <div class="footer-col">
                    <h3 class="footer-heading">Links Rápidos</h3>
                    <ul class="footer-links">
                        <li><a href="#/receitas">Explorar Receitas</a></li>
                        <li><a href="#/dicas-saude">Dicas de Saúde</a></li>
                        <li><a href="#/receitas-humor/rapido">Receitas por Humor</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3 class="footer-heading">Sobre</h3>
                    <p class="footer-about">Plataforma com organização inteligente de receitas utilizando tecnologia de IA para facilitar sua experiência culinária.</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 CookBook. Todos os direitos reservados.</p>
            </div>
        </div>
    `;
}


// ==================== PAGES ====================
function renderHomePage() {
    const app = document.getElementById('app');
    const recipes = RECIPES_DATA.slice(0, 6);
   
    app.innerHTML = `
        <section class="hero">
            <div class="container">
                <div class="hero-grid">
                    <div class="hero-text-content">
                        <h1 class="hero-title">Descubra Receitas Incríveis</h1>
                        <p class="hero-description">
                            Bem-vindo à nossa comunidade culinária! Explore milhares de receitas, compartilhe suas criações e conecte-se com outros apaixonados por culinária.
                        </p>
                        <div class="hero-actions">
                            <a href="#/receitas" class="btn-hero btn-white">
                                Explorar Receitas
                                ${Icons.arrowRight}
                            </a>
                            <button class="btn-hero btn-outline-white" onclick="openAddRecipeModal()">
                                Adicionar Minha Receita
                            </button>
                        </div>
                    </div>
                    <div class="hero-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1649360831159-13ce9675dbf4?w=800" alt="Culinária" class="hero-image">
                    </div>
                </div>
            </div>
        </section>


        <section class="about-section">
            <div class="container">
                <div class="about-grid">
                    <div class="about-card">
                        <div class="about-icon-wrapper">${Icons.heart}</div>
                        <h3 class="about-title">Comunidade Ativa</h3>
                        <p class="about-description">Faça parte de uma comunidade que ama cozinhar e compartilhar experiências</p>
                    </div>
                    <div class="about-card">
                        <div class="about-icon-wrapper">${Icons.sparkles}</div>
                        <h3 class="about-title">IA Inteligente</h3>
                        <p class="about-description">Sistema com IA organiza automaticamente as receitas em categorias relevantes</p>
                    </div>
                    <div class="about-card">
                        <div class="about-icon-wrapper">${Icons.sparkles}</div>
                        <h3 class="about-title">Dicas de Saúde</h3>
                        <p class="about-description">Conteúdos sobre alimentação saudável com base em orientações profissionais</p>
                    </div>
                </div>
            </div>
        </section>


        <section class="categories-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Explore por Categorias</h2>
                    <p class="section-subtitle">Encontre receitas organizadas por temas e estilos culinários</p>
                </div>
                <div class="categories-grid">
                    ${CATEGORIES_DATA.map(cat => createCategoryCard(cat)).join('')}
                </div>
            </div>
        </section>


        <section class="recipes-section">
            <div class="container">
                <div class="recipes-header">
                    <div>
                        <h2 class="section-title">Receitas em Destaque</h2>
                        <p class="section-subtitle">Descubra as receitas mais populares da nossa comunidade</p>
                    </div>
                    <a href="#/receitas" class="btn-ver-todas">Ver Todas ${Icons.arrowRight}</a>
                </div>
                <div class="recipes-grid">
                    ${recipes.map(recipe => createRecipeCard(recipe)).join('')}
                </div>
            </div>
        </section>


        <section class="mood-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Receitas Baseadas no Seu Humor</h2>
                    <p class="section-subtitle">Encontre a receita perfeita para o seu momento atual</p>
                </div>
                <div class="mood-grid">
                    ${MOODS_DATA.map(mood => createMoodCard(mood)).join('')}
                </div>
            </div>
        </section>


        <section class="goal-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Receitas Baseadas em Objetivos</h2>
                    <p class="section-subtitle">Alcance suas metas com receitas personalizadas</p>
                </div>
                <div class="goal-grid">
                    ${GOALS_DATA.map(goal => createGoalCard(goal)).join('')}
                </div>
            </div>
        </section>


        <section class="cta-section">
            <div class="container">
                <div class="cta-content">
                    <h2 class="cta-title">Pronto para Compartilhar Suas Receitas?</h2>
                    <p class="cta-text">Junte-se à nossa comunidade e inspire outros cozinheiros com suas criações</p>
                    <button class="btn-cta" onclick="openAddRecipeModal()">
                        Adicionar Minha Receita
                        ${Icons.arrowRight}
                    </button>
                </div>
            </div>
        </section>
    `;
}


function renderRecipesPage(params) {
    const { search, category } = params;
    let recipes = RECIPES_DATA;
    let title = 'Todas as Receitas';
   
    if (search) {
        recipes = RECIPES_DATA.filter(r =>
            r.title.toLowerCase().includes(search.toLowerCase()) ||
            r.description.toLowerCase().includes(search.toLowerCase())
        );
        title = `Resultados para "${search}"`;
    } else if (category) {
        recipes = RECIPES_DATA.filter(r => r.category === category);
        title = category;
    }
   
    const app = document.getElementById('app');
    app.innerHTML = `
        <section class="recipes-page">
            <div class="container">
                <div class="page-header">
                    <h1 class="page-title">${title}</h1>
                    <p class="page-subtitle">${recipes.length} ${recipes.length === 1 ? 'receita encontrada' : 'receitas encontradas'}</p>
                </div>
                ${recipes.length > 0 ? `
                    <div class="recipes-grid">
                        ${recipes.map(recipe => createRecipeCard(recipe)).join('')}
                    </div>
                ` : `
                    <div class="no-results">
                        ${Icons.search}
                        <h3>Nenhuma receita encontrada</h3>
                        <p>Tente buscar por outros termos ou explore nossas categorias</p>
                        <a href="#/" class="btn-primary">Voltar ao Início</a>
                    </div>
                `}
            </div>
        </section>
    `;
}


function renderRecipeDetailPage(params) {
    const recipe = RECIPES_DATA.find(r => r.id === params.id);
    if (!recipe) {
        Router.getInstance().navigate('/');
        return;
    }


    const favoritesManager = FavoritesManager.getInstance();
    const isFavorite = favoritesManager.isFavorite(recipe.id);


    const app = document.getElementById('app');
    app.innerHTML = `
        <section class="recipe-detail">
            <div class="container">
                <div class="recipe-detail-header">
                    <button onclick="history.back()" class="btn-back">
                        ${Icons.arrowLeft}
                        Voltar
                    </button>
                </div>


                <div class="recipe-detail-content">
                    <div class="recipe-detail-image-wrapper">
                        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">
                        <span class="recipe-category-badge">${recipe.category}</span>
                    </div>


                    <div class="recipe-detail-info">
                        <h1 class="recipe-detail-title">${recipe.title}</h1>
                        <p class="recipe-detail-description">${recipe.description}</p>


                        <div class="recipe-detail-meta">
                            <div class="meta-item">
                                ${Icons.clock}
                                <div>
                                    <span class="meta-label">Tempo</span>
                                    <span class="meta-value">${recipe.prepTime}</span>
                                </div>
                            </div>
                            <div class="meta-item">
                                ${Icons.users}
                                <div>
                                    <span class="meta-label">Porções</span>
                                    <span class="meta-value">${recipe.servings}</span>
                                </div>
                            </div>
                            <div class="meta-item">
                                ${Icons.sparkles}
                                <div>
                                    <span class="meta-label">Calorias</span>
                                    <span class="meta-value">${recipe.calories} kcal</span>
                                </div>
                            </div>
                            <div class="meta-item">
                                <span class="recipe-difficulty ${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
                            </div>
                        </div>


                        <div class="recipe-author-info">
                            ${Icons.user}
                            <span>Por ${recipe.author}</span>
                        </div>
                    </div>
                </div>


                <div class="recipe-detail-sections">
                    <div class="recipe-section">
                        <h2 class="recipe-section-title">Ingredientes</h2>
                        <ul class="ingredients-list">
                            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                    </div>


                    <div class="recipe-section">
                        <h2 class="recipe-section-title">Modo de Preparo</h2>
                        <ol class="instructions-list">
                            ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                        </ol>
                    </div>
                </div>


                <div class="recipe-detail-actions">
                    <button class="btn-action btn-favorite ${isFavorite ? 'active' : ''}" onclick="handleFavoriteToggle('${recipe.id}')">
                        ${Icons.heart}
                        ${isFavorite ? 'Favoritado' : 'Favoritar'}
                    </button>
                    <button class="btn-action" onclick="showToast('Compartilhar em breve!', 'info')">
                        ${Icons.user}
                        Compartilhar
                    </button>
                </div>
            </div>
        </section>
    `;
}


function renderProfilePage() {
    const userManager = UserManager.getInstance();
   
    if (!userManager.isLoggedIn()) {
        openLoginModal();
        Router.getInstance().navigate('/');
        return;
    }


    const user = userManager.getUser();
    const favoritesManager = FavoritesManager.getInstance();
    const favoriteRecipes = favoritesManager.getFavoriteRecipes();


    const app = document.getElementById('app');
    app.innerHTML = `
        <section class="profile-page">
            <div class="container">
                <div class="page-header">
                    <h1 class="page-title">Meu Perfil</h1>
                    <p class="page-subtitle">Olá, ${user.name}!
                        ${user.userType ? `<span class="user-type-badge ${user.userType}">${user.userType === 'nutricionista' ? 'Nutricionista' : 'Usuário'}</span>` : ''}
                    </p>
                </div>


                <div class="profile-tabs">
                    <button class="profile-tab active" onclick="showProfileTab('favorites')">
                        Receitas Favoritas (${favoriteRecipes.length})
                    </button>
                    <button class="profile-tab" onclick="showProfileTab('edit')">
                        Editar Perfil
                    </button>
                </div>


                <div id="favoritesTab" class="tab-content active">
                    ${favoriteRecipes.length > 0 ? `
                        <div class="favorites-grid">
                            ${favoriteRecipes.map(recipe => createRecipeCard(recipe)).join('')}
                        </div>
                    ` : `
                        <div class="empty-state">
                            ${Icons.heart}
                            <h3>Nenhuma receita favorita ainda</h3>
                            <p>Comece a explorar e adicione suas receitas preferidas aos favoritos!</p>
                            <a href="#/receitas" class="btn-primary">
                                Explorar Receitas
                                ${Icons.arrowRight}
                            </a>
                        </div>
                    `}
                </div>


                <div id="editTab" class="tab-content">
                    <form class="edit-profile-form" onsubmit="handleEditProfile(event)">
                        <div class="form-group">
                            <label for="editName">Nome</label>
                            <input type="text" id="editName" value="${user.name}" required>
                        </div>


                        <div class="form-group">
                            <label for="editEmail">E-mail</label>
                            <input type="email" id="editEmail" value="${user.email}" required>
                        </div>


                        <div class="form-group">
                            <label for="editPhone">Telefone</label>
                            <input type="tel" id="editPhone" value="${user.phone || ''}" placeholder="(00) 00000-0000">
                        </div>


                        <div class="form-group">
                            <label for="editBio">Sobre você</label>
                            <textarea id="editBio" rows="4" placeholder="Conte um pouco sobre você e sua paixão pela culinária">${user.bio || ''}</textarea>
                        </div>


                        <button type="submit" class="btn-submit">Salvar Alterações</button>
                    </form>
                </div>
            </div>
        </section>
    `;
}


function renderHealthTipsPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <section class="health-page">
            <div class="container">
                <div class="page-header">
                    <h1 class="page-title">Dicas de Saúde</h1>
                    <p class="page-subtitle">Orientações de profissionais para uma alimentação saudável</p>
                </div>
                <div class="health-grid">
                    ${HEALTH_TIPS.map(tip => createHealthCard(tip)).join('')}
                </div>
            </div>
        </section>
    `;
}


function renderMoodRecipesPage(params) {
    const moodType = params.mood || 'rapido';
    const recipes = RECIPES_DATA.filter(r => r.mood === moodType);
    const mood = MOODS_DATA.find(m => m.type === moodType);
   
    const app = document.getElementById('app');
    app.innerHTML = `
        <section class="mood-page">
            <div class="container">
                <div class="page-header">
                    <h1 class="page-title">Receitas ${mood ? mood.title : 'por Humor'}</h1>
                    <p class="page-subtitle">${mood ? mood.description : ''}</p>
                </div>
                ${recipes.length > 0 ? `
                    <div class="recipes-grid">
                        ${recipes.map(recipe => createRecipeCard(recipe)).join('')}
                    </div>
                ` : `
                    <div class="no-results">
                        ${Icons.heart}
                        <h3>Nenhuma receita encontrada para este humor</h3>
                        <p>Explore outras categorias ou volte à página inicial</p>
                        <a href="#/" class="btn-primary">Voltar ao Início</a>
                    </div>
                `}
            </div>
        </section>
    `;
}


function renderGoalRecipesPage(params) {
    const goalType = params.goal || 'perda-peso';
    const recipes = RECIPES_DATA.filter(r => r.goal === goalType);
    const goal = GOALS_DATA.find(g => g.type === goalType);
   
    const app = document.getElementById('app');
    app.innerHTML = `
        <section class="goal-page">
            <div class="container">
                <div class="page-header">
                    <h1 class="page-title">Receitas para ${goal ? goal.title : 'Objetivos'}</h1>
                    <p class="page-subtitle">${goal ? goal.description : ''}</p>
                </div>
                ${recipes.length > 0 ? `
                    <div class="recipes-grid">
                        ${recipes.map(recipe => createRecipeCard(recipe)).join('')}
                    </div>
                ` : `
                    <div class="no-results">
                        ${Icons.sparkles}
                        <h3>Nenhuma receita encontrada para este objetivo</h3>
                        <p>Explore outras categorias ou volte à página inicial</p>
                        <a href="#/" class="btn-primary">Voltar ao Início</a>
                    </div>
                `}
            </div>
        </section>
    `;
}


// ==================== MODALS ====================
function createModals() {
    const container = document.getElementById('modals-container');
    container.innerHTML = `
        <div id="loginModal" class="modal">
            <div class="modal-overlay" onclick="closeLoginModal()"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">Entrar</h2>
                    <button class="modal-close" onclick="closeLoginModal()">${Icons.x}</button>
                </div>
                <div class="modal-body">
                    <p class="modal-description">Entre para salvar suas receitas favoritas</p>
                    <form id="loginForm" onsubmit="handleLogin(event)">
                        <div class="form-group">
                            <label for="loginName">Nome</label>
                            <input type="text" id="loginName" required>
                        </div>
                        <div class="form-group">
                            <label for="loginEmail">E-mail</label>
                            <input type="email" id="loginEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="loginPassword">Senha</label>
                            <input type="password" id="loginPassword" required>
                        </div>
                        <div class="form-group">
                            <label for="userType">Tipo de Usuário</label>
                            <select id="userType" required>
                                <option value="">Selecione...</option>
                                <option value="usuario">Usuário</option>
                                <option value="nutricionista">Nutricionista</option>
                            </select>
                        </div>
                        <button type="submit" class="btn-submit">Entrar</button>
                    </form>
                </div>
            </div>
        </div>


        <div id="addRecipeModal" class="modal">
            <div class="modal-overlay" onclick="closeAddRecipeModal()"></div>
            <div class="modal-content modal-large">
                <div class="modal-header">
                    <h2 class="modal-title">Adicionar Nova Receita</h2>
                    <button class="modal-close" onclick="closeAddRecipeModal()">${Icons.x}</button>
                </div>
                <div class="modal-body">
                    <form id="addRecipeForm" onsubmit="handleAddRecipe(event)">
                        <div class="form-group">
                            <label for="recipeTitle">Nome da Receita</label>
                            <input type="text" id="recipeTitle" required>
                        </div>
                        <div class="form-group">
                            <label for="recipeDescription">Descrição</label>
                            <textarea id="recipeDescription" rows="3" required></textarea>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="recipeTime">Tempo de Preparo</label>
                                <input type="text" id="recipeTime" placeholder="Ex: 30 min" required>
                            </div>
                            <div class="form-group">
                                <label for="recipeServings">Porções</label>
                                <input type="number" id="recipeServings" min="1" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="recipeIngredients">Ingredientes (um por linha)</label>
                            <textarea id="recipeIngredients" rows="5" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="recipeInstructions">Modo de Preparo</label>
                            <textarea id="recipeInstructions" rows="6" required></textarea>
                        </div>
                        <button type="submit" class="btn-submit">Publicar Receita</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}


// ==================== EVENT HANDLERS ====================
function openLoginModal() {
    document.getElementById('loginModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}


function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
    document.body.style.overflow = '';
}


function openAddRecipeModal() {
    const userManager = UserManager.getInstance();
    if (!userManager.isLoggedIn()) {
        showToast('Faça login para adicionar receitas', 'error');
        openLoginModal();
        return;
    }
    document.getElementById('addRecipeModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}


function closeAddRecipeModal() {
    document.getElementById('addRecipeModal').classList.remove('active');
    document.body.style.overflow = '';
}


function handleLogin(e) {
    e.preventDefault();
    const name = document.getElementById('loginName').value;
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const userType = document.getElementById('userType').value;
   
    UserManager.getInstance().login(name, email, password, userType);
    closeLoginModal();
    document.getElementById('loginForm').reset();
    showToast('Login realizado com sucesso!', 'success');
    renderHeader();
}


function handleAddRecipe(e) {
    e.preventDefault();
    showToast('Receita adicionada com sucesso!', 'success');
    closeAddRecipeModal();
    document.getElementById('addRecipeForm').reset();
}


function handleEditProfile(e) {
    e.preventDefault();
    const userManager = UserManager.getInstance();
    userManager.updateUser({
        name: document.getElementById('editName').value,
        email: document.getElementById('editEmail').value,
        phone: document.getElementById('editPhone').value,
        bio: document.getElementById('editBio').value
    });
    showToast('Perfil atualizado com sucesso!', 'success');
    renderHeader();
    renderProfilePage();
}


function handleHeaderSearch(e) {
    e.preventDefault();
    const term = document.getElementById('headerSearchInput').value;
    if (term.trim()) {
        Router.getInstance().navigate(`/receitas?search=${encodeURIComponent(term)}`);
    }
}


function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('active');
}


function handleLogout() {
    UserManager.getInstance().logout();
    showToast('Logout realizado com sucesso!', 'success');
    renderHeader();
    Router.getInstance().navigate('/');
}


function handleFavoriteToggle(recipeId) {
    const userManager = UserManager.getInstance();
   
    if (!userManager.isLoggedIn()) {
        showToast('Faça login para favoritar receitas', 'error');
        openLoginModal();
        return;
    }


    const favoritesManager = FavoritesManager.getInstance();
    const isFavorite = favoritesManager.toggleFavorite(recipeId);
   
    const buttons = document.querySelectorAll(`.recipe-favorite[onclick*="${recipeId}"]`);
    buttons.forEach(btn => {
        if (isFavorite) {
            btn.classList.add('active');
            btn.querySelector('svg').setAttribute('fill', 'currentColor');
        } else {
            btn.classList.remove('active');
            btn.querySelector('svg').setAttribute('fill', 'none');
        }
    });
   
    showToast(isFavorite ? 'Receita adicionada aos favoritos!' : 'Receita removida dos favoritos', 'success');
}


function showProfileTab(tabName) {
    document.querySelectorAll('.profile-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
   
    event.target.classList.add('active');
    document.getElementById(tabName + 'Tab').classList.add('active');
}


function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#f97316'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
   
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}


// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const userMenu = e.target.closest('.user-menu');
    if (!userMenu) {
        const dropdown = document.getElementById('userDropdown');
        if (dropdown) dropdown.classList.remove('active');
    }
});


// ==================== ROUTER SETUP ====================
const router = Router.getInstance();


router.addRoute('/', renderHomePage);
router.addRoute('/receitas', renderRecipesPage);
router.addRoute('/categoria/:category', (params) => renderRecipesPage({ category: decodeURIComponent(params.category) }));
router.addRoute('/receita/:id', renderRecipeDetailPage);
router.addRoute('/perfil', renderProfilePage);
router.addRoute('/dicas-saude', renderHealthTipsPage);
router.addRoute('/receitas-humor/:mood', renderMoodRecipesPage);
router.addRoute('/receitas-objetivos/:goal', renderGoalRecipesPage);


// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🍳 CookBook inicializado!');
    renderHeader();
    renderFooter();
    createModals();
    router.handleRoute();
});
