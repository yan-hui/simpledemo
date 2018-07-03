<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">哈哈哈哈哈哈系统</router-link>
            <ul class="navbar-nav">
                <li>
                    <router-link :to="{name:'homeLink'}" class="nav-link">主页</router-link>
                </li>
                <li>
                    <router-link :to="{name:'userLink'}" class="nav-link">用户管理</router-link>
                </li>
            </ul>
            
            <ul class="navbar-nav ml-auto">
                <li>
                    <router-link to="/login" class="nav-link">登录</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
