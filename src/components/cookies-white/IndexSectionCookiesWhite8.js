import React, { useState, useEffect } from 'react';

export default function IndexSectionCookiesWhite8() {
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        // Vérifier si l'utilisateur a déjà accepté ou décliné les cookies
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (cookiesAccepted === 'true' || cookiesAccepted === 'false') {
            setShowBanner(false);
        }
    }, []);

    const handleAcceptCookies = () => {
        setShowBanner(false);
        // Enregistrer dans le stockage local que l'utilisateur a accepté les cookies
        localStorage.setItem('cookiesAccepted', 'true');
    };

    const handleDeclineCookies = () => {
        setShowBanner(false);
        // Enregistrer dans le stockage local que l'utilisateur a décliné les cookies
        localStorage.setItem('cookiesAccepted', 'false');
    };

    return (
        <>
            {/* Condition pour afficher le bandeau uniquement si showBanner est true */}
            {showBanner && (
                <div className="fixed bottom-0 z-50 w-full p-6 md:p-12">
                    <div className="p-10 w-full bg-white max-w-3xl border border-coolGray-100 rounded-md shadow-md">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                                <p className="mb-4 text-coolGray-500 font-medium">Nous utilisons des cookies tiers afin de personnaliser votre expérience.</p>
                                <a className="flex items-center font-medium text-yellow-500 hover:text-yellow-600" href="#">
                                    <span className="mr-2">Lisez notre politique en matière de cookies.</span>
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* SVG pour le lien */}
                                    </svg>
                                </a>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <div className="flex flex-wrap justify-end">
                                    <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                                        {/* Bouton pour décliner les cookies */}
                                        <button className="inline-block py-3 px-5 w-full leading-5 text-coolGray-800 bg-white hover:bg-coolGray-100 font-medium text-center focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm" onClick={handleDeclineCookies}>Decliner</button>
                                    </div>
                                    <div className="w-full md:w-auto py-1 md:py-0">
                                        {/* Bouton pour accepter les cookies */}
                                        <button className="inline-block py-3 px-5 w-full leading-5 text-white bg-yellow-500 hover:bg-yellow-600 font-medium text-center focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm" onClick={handleAcceptCookies}>Accepter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
