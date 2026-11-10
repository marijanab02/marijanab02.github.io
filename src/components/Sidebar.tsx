import { Icon } from "@/components/Icon";

const navigation = [
    { label: "Home", href: "#home", icon: "home" as const },
    { label: "Projects", href: "#projects", icon: "grid" as const },
    { label: "Research", href: "#research", icon: "flask" as const },
    { label: "Experience", href: "#experience", icon: "briefcase" as const },
    { label: "About", href: "#about", icon: "user" as const },
    { label: "Contact", href: "#contact", icon: "mail" as const },
];

export function Sidebar() {
    return (
        <aside className="sidebar" aria-label="Main navigation">
            <a className="brand" href="#home" aria-label="Marijana Bandić – home">
                MB<span>.</span>
            </a>
            <nav className="side-nav">
                {navigation.map((item, index) => (
                    <a className={`nav-link${index === 0 ? " active" : ""}`} href={item.href} key={item.href}>
                        <Icon name={item.icon} size={17} />
                        <span>{item.label}</span>
                        {index === 0 && <span className="nav-dot" />}
                    </a>
                ))}
            </nav>
            <div className="sidebar-bottom">
                <a className="sidebar-mail" href="mailto:bandicm02@gmail.com" aria-label="Send email">
                    <Icon name="mail" size={19} />
                </a>
                <span className="sidebar-line" />
                <span className="sidebar-caption">SCROLL TO EXPLORE</span>
                <a className="scroll-cue" href="#overview" aria-label="Scroll to overview">
                    <Icon name="chevron-down" size={17} />
                </a>
            </div>
        </aside>
    );
}
