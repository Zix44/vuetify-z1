<template>
    <v-list-item :to="menu.path" link>
        <v-list-item-avatar>
            <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title>{{ menu.title}}</v-list-item-title>
        </v-list-item-content>                  
    </v-list-item>
</template>

<script>
export default {
    name:'MenuItem',
    props:['menu'],    
}
</script>