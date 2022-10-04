<template>
    <div class="bg-gray-50 fixed right-0 bottom-0 left-0 top-0">
        <div class="grid grid-cols-2 h-full">
            <div class="flex items-center justify-center px-8">
                <slot></slot>
            </div>
            <div class="flex items-center justify-center">
                <img src="src/assets/illustration.svg" alt="">
            </div>
        </div>
    </div>
</template>