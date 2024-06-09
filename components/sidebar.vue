<template>
    <aside id="sidebar" class="sidebar" v-bind="collapsed ? {collapsed: ''} : {}">
        <button class="sidebar-toggler" @click="toggleCollapse">
            <svg class="sidebar-toggler__icon bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
        </button>

        <ul class="sidebar-collapse">
            <li class="sidebar-item" v-for="item in items" >
                <NuxtLink v-if="item.href !== ''" class="sidebar-link" :to="item.href">
                    <i class="sidebar-link__title" v-if="item.icon !== ''" :class="`fa fa-${item.icon}`" aria-hidden="true"></i>
                    <span class="sidebar-link__text">{{item.text}}</span>
                </NuxtLink>
                <span v-else class="sidebar-title">
                    <i class="sidebar-title__title" v-if="item.icon !== ''" :class="`fa fa-${item.icon}`" aria-hidden="true"></i>
                    <span class="sidebar-title__text">{{item.text}}</span>
                </span>
            </li>
        </ul>
    </aside>
</template>

<script setup lang="ts">
const props = defineProps({
    collapsed: {
        type: Boolean,
        default: false,
    },

    items: {
        type: Array,
        default: [],

        validator(value) {
            if (!(value instanceof Array)) {
                return false
            }

            for (const item of value) {
                if (typeof item.href !== 'string' || typeof item.text !== 'string' || typeof item.icon !== 'string') {
                    return false
                }
            }

            return true
        }
    }
})


const toggleCollapse = () => {
    const sidebar = document.getElementById("sidebar")

    if (sidebar.hasAttribute("collapsed")) {
        sidebar.removeAttribute("collapsed")
    } else {
        sidebar.setAttribute("collapsed", "")
    }
}
</script>

<style>
.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    float: left;
    width: 100vw;
    height: 100vh;
    max-width: 228px;
    background-color: #04091e;
    z-index: 999;
    transition: 0.4s;
}

.sidebar[collapsed] {
    width: 0;
}

.sidebar[collapsed] .sidebar-collapse {
    display: none;
}

@media (max-width: 576px) {
    .sidebar {
        max-width: calc(100vw - 56px);
    }
}

.sidebar-toggler {
    position: absolute;
    left: 100%;
    top: calc(50% - 28px);
    padding: 0;
    width: 28px;
    height: 56px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f26f43;
	border: none;
    border-radius: 0 2px 2px 0;
    outline: none !important;
	cursor: pointer;
	transition: 0.4s;
}

.sidebar-toggler:hover {
    background-color: #e9ecef;
}

.sidebar-toggler:hover .sidebar-toggler__icon {
	fill: #f26f43;
}

.sidebar-toggler__icon {
	width: 28px;
	height: 28px;
	fill: #e9ecef;
    transition: 0.4s;
    transform: rotate(180deg);
}

.sidebar[collapsed] .sidebar-toggler__icon {
    transform: rotate(0);
}

.sidebar-collapse {
    margin: 0;
	padding: 16px 12px;
	width: 100%;
	height: 100vh;
	overflow-y: auto;
	overflow-x: hidden;
	list-style: none;
}

.sidebar-collapse::-webkit-scrollbar {
	width: 4px;
	background-color: transparent;
}

.sidebar-collapse::-webkit-scrollbar-track {
	background-color: transparent;
}

.sidebar-collapse::-webkit-scrollbar-thumb {
	background-color: #f26f43;
	border-radius: 0;
}

.sidebar-collapse::-webkit-scrollbar-button {
    height: 0;
}

.sidebar-link,
.sidebar-title {
    font-size: 14px;
    color: #f26f43;
	width: 100%;
	height: 48px;
	list-style: none;
	text-decoration: none;
	display: flex;
	align-items: center;
	border-bottom: 2px solid transparent;
}

.sidebar-title {
    cursor: default;
}

.sidebar-link:hover {
    color: #f26f43;
}

.sidebar-link:hover {
	border-bottom: 2px solid #f26f43;
}

.sidebar-link__text, 
.sidebar-title__text {
    margin-left: 12px;
    color: #ced4da;
}

.sidebar-title__text {
    font-weight: 800;
}
</style>