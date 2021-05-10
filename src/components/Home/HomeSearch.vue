<template>
    <div class="home-search">
        <a-input-search placeholder="input search text" enter-button @search="onSearch" />
        <p class="home-search-title">易Beauty</p>
        <p class="home-search-user">
            <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96"/>
            <a-icon type="user" />
        </p>
    </div>
</template>
<script>
export default {
    methods: {
        onSearch() {}
    }
}
</script>
<style lang="less">
.home-search {
    height: 100px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ant-input-group-wrapper {
        width: 20%;
        .ant-input-group-addon {
            .ant-btn-primary {
                background-color: #848484;
                border-color: #848484;
            }
        }
    }
    &-title {
        padding: 15px;
        font-size: 16px;
        font-weight: bold;
    }
    &-user {
        width: 20%;
        text-align: right;
        .anticon {
            svg {
                width: 25px;
                height: 25px;
            }
            margin-right: 7px;
        }
    }
}
</style>