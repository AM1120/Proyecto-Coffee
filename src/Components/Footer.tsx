export default function Footer() {
    return (
        <footer className="min-h-[20vh] max-h-[20vh] bg-orange-950 flex flex-row justify-between items-center px-6 text-white">
            <p className="text-sm">&copy; 2024 Todos los derechos reservados</p>
            <div className="text-sm">
                <p>Síguenos en nuestras redes sociales:</p>
                <ul className="flex flex-row gap-4 mt-2">
                    <li>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-950 transition-colors"
                        >
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-950 transition-colors"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-950 transition-colors"
                        >
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
