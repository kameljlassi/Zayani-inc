export const modal = writable(null);
export const windowStyle = writable({});

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

import {writable} from 'svelte/store'



export const langs = ['en', 'fr']
function createLangStore() {
    let saved = JSON.parse(localStorage.getItem('lang')) || 'en'


    

    const { subscribe, set, update } = writable(saved);

    return {
        subscribe,
        set: (newV) => {
            if (langs.includes(newV)) {
                localStorage.setItem('lang', JSON.stringify(newV))
                set(newV)
            } else {
                set('en')
            }
            
        },
    };
}

export const lang = createLangStore()



