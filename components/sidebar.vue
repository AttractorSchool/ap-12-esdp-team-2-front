<template>
    <aside id="sidebar" class="sidebar" collapsed>
        <button class="sidebar-toggler" @click="toggleCollapse">
            <svg class="sidebar-toggler__icon bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
        </button>

        <ul class="sidebar-collapse">
            <li class="sidebar-item" v-for="item in items" >
                <NuxtLink v-if="item.href !== ''" class="sidebar-link" :to="item.href">
                    <img class="sidebar-link__icon" v-if="item.icon !== ''" :src="item.icon" alt="icon"/>
                    <span class="sidebar-link__text">{{item.text}}</span>
                </NuxtLink>
                <span v-else class="sidebar-title">
                    <img class="sidebar-title__icon" v-if="item.icon !== ''" :src="item.icon" alt="icon"/>
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
        default: true,
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
    const wrapper = document.getElementById("wrapper")
    
    if (sidebar.hasAttribute("collapsed")) {
        sidebar.removeAttribute("collapsed")
        wrapper.removeAttribute("collapsed")
    } else {
        sidebar.setAttribute("collapsed", "")
        wrapper.setAttribute("collapsed", "")
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
    background-color: var(--bs-gray-100);
    z-index: 9999;
    transition: 0.4s;
}

.sidebar[collapsed] {
    width: 0;
}

#wrapper {
    float: right;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    transition: 0.4s;
}

@media (max-width: 576px) {
    .sidebar {
        max-width: calc(100vw - 28px);
    }

    #wrapper {
        width: calc(100vw - 28px);
    }
}

@media (min-width: 575.98px) {
    #wrapper {
        width: calc(100vw - 256px);
    }

    #wrapper[collapsed] {
        width: calc(100vw - 28px)
    }
}

.sidebar-toggler {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0;
    margin-left: 100%;
    width: 28px;
    height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--bs-gray-900);
	outline: none;
	border: none;
	cursor: pointer;
	transition: 0.4s;
}

.sidebar-toggler:hover {
    background-color: var(--bs-gray-200);
}

.sidebar-toggler:hover .sidebar-toggler__icon {
	fill: var(--bs-gray-900);
}

.sidebar-toggler__icon {
	width: 28px;
	height: 28px;
	fill: var(--bs-gray-200);
    transition: 0.4s;
    transform: rotate(180deg);
}

.sidebar[collapsed] .sidebar-toggler__icon {
    transform: rotate(0);
}

.sidebar-collapse {
    margin: 0;
	padding: 0;
	width: 100%;
	height: calc(100vh - 48px);
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
	background-color: var(--bs-gray-400);
	border-radius: 0;
}

.sidebar-link,
.sidebar-title {
	width: 100%;
	height: 48px;
	list-style: none;
	text-decoration: none;
	display: flex;
	align-items: center;
	border-bottom: 2px solid transparent;
}

.sidebar-link:hover {
	border-bottom: 2px solid #f26f43;
}

.sidebar-link:hover .sidebar-link__icon {
	color: #f26f43;
    fill: #f26f43;
}

.sidebar-link:hover .sidebar-link__text  {
	color: #f26f43;
}

.sidebar-link__icon, .sidebar-title__icon {
	width: 24px;
	height: 24px;
	margin-left: 12px;
	color: #f26f43;
    fill: #f26f43;
}

.sidebar-link__text, 
.sidebar-title__text {
    margin-left: 12px;
    color: var(--bs-gray-700);
}

.sidebar-title__text {
    font-weight: 800;
}
</style>