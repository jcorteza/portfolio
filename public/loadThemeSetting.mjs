'use client'

const themeSetting = localStorage.getItem('theme');
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches && 'dark';
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches && 'light';
document.getElementsByTagName('html')[0].classList.add(themeSetting || prefersDark || prefersLight || '');