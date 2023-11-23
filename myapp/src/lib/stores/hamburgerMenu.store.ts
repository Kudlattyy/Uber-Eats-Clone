import { writable } from 'svelte/store';

export const isHamburgerMenu = writable(false);
export const isDeliveryMenu = writable(false);
export const isTimeMenu = writable(false);


export function ChangeStoreHamburgerMenu() {
	isHamburgerMenu.update((oldValue) => {
        return !oldValue
    });
}

export function ChangeStoreDeliveryMenu(){
    isDeliveryMenu.set(true);
    console.log("Miejsce")
}

export function ChangeStoreTimeMenu(){
    isTimeMenu.set(true);
    console.log("Czas")
}
