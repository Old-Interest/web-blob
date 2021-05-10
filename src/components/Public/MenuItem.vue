<template>
    <div>
        <template v-if="list.length">
            <a-sub-menu v-for="item in list" :key="item.name">
                {{item.name}}
                <a-menu-item-group v-for="subItem in item.childred" :key="subItem.name">
                    <a-menu-item>
                        {{subItem.name}}
                    </a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
        </template>
    </div>
</template>
<script>
export default {
    props: ["list"]
}
</script>