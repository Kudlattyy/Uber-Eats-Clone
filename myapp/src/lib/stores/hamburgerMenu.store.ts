import { writable } from 'svelte/store';

export const isHamburgerMenu = writable(false);

export function ChangeStoreHamburgerMenu() {
	isHamburgerMenu.update((oldValue) => {
        return !oldValue
    });
   
}

