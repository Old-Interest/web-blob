<template>
  <div class="header-menu">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="护肤">
        <HomeContent :imageList="skinCareList"/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="彩妆">
        <HomeContent :imageList="makeUpCareList"/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="头发护理">
        <HomeContent :imageList="hairCareList"/>
      </a-tab-pane>
      <a-tab-pane key="4" tab="身体护理">
        <HomeContent :imageList="bodyCareList"/>
      </a-tab-pane>
      <a-tab-pane key="5" tab="其他">
        <HomeContent :imageList="otherCareList"/>
      </a-tab-pane>
    </a-tabs>
    <!-- <a-menu
      style="width: 100%;"
      :default-selected-keys="current"
      mode="horizontal"
    >
      <template v-for="item in menuList">
        <a-sub-menu :key="item.key">
          <span slot="title">
            <span>{{item.name}}</span>
          </span>
          <template v-for="inItem in item.children">
            <a-menu-item
              v-if="!inItem.children"
              :key="inItem.key"
            >{{inItem.name}}</a-menu-item>
            <a-sub-menu v-if="inItem.children" :key="inItem.key">
              <span slot="title">
                <span>{{inItem.name}}</span>
              </span>
              <template v-for="inItemTwo in inItem.children">
                <a-menu-item
                  v-if="!inItemTwo.children"
                  :key="inItemTwo.key"
                >{{inItemTwo.name}}</a-menu-item>
                <a-sub-menu v-if="inItemTwo.children" :key="inItemTwo.key">
                  <span slot="title">
                    <span>{{inItemTwo.name}}</span>
                  </span>
                  <template v-for="inItemThree in inItemTwo.children">
                    <a-menu-item
                      v-if="!inItemThree.children"
                      :key="inItemThree.key"
                    >{{inItemThree.name}}</a-menu-item>
                  </template>
                </a-sub-menu>
              </template>
            </a-sub-menu>
          </template>
        </a-sub-menu>
      </template>
    </a-menu> -->
  </div>
</template>
<script>
// import MenuItem from "./MenuItem";
import HomeContent from "../Home/HomeContent";
export default {
  props: ["menuList"],
  components: {
    HomeContent
    //   MenuItem
  },
  data() {
    return {
      current: [""],
      skinCareList: [
        {
          id: 1,
          url: require("../../assets/skin1.jpg")
        },
        {
          id: 2,
          url: require("../../assets/skin2.jpg")
        },
        {
          id: 3,
          url: require("../../assets/skin3.jpg")
        }
      ],
      makeUpCareList: [
        {
          id: 1,
          url: require("../../assets/makeUp1.jpg")
        },
        {
          id: 2,
          url: require("../../assets/makeUp2.jpg")
        },
        {
          id: 3,
          url: require("../../assets/makeUp3.jpg")
        },
        {
          id: 4,
          url: require("../../assets/makeUp4.jpg")
        }
      ],
      hairCareList: [
        {
          id: 1,
          url: require("../../assets/hair1.jpg")
        },
        {
          id: 2,
          url: require("../../assets/hair2.jpg")
        },
        {
          id: 3,
          url: require("../../assets/hair3.jpg")
        }
      ],
      bodyCareList: [
        {
          id: 1,
          url: require("../../assets/body1.jpg")
        },
        {
          id: 2,
          url: require("../../assets/body2.jpg")
        }
      ],
      otherCareList: [
        {
          id: 1,
          url: require("../../assets/other1.png")
        },
        {
          id: 2,
          url: require("../../assets/other2.jpg")
        }
      ]
    };
  }
};
</script>
<style lang="less">
.header-menu {
  // position: relative;
  .ant-menu {
    display: flex;
    justify-content: space-around;
  }
}
// .header-menu-itemGroup {
//   .ant-menu-item-group-list {
//     max-height: 300px;
//     overflow: auto;
//   }
// }
.ant-menu-submenu {
  max-height: 300px;
  // overflow: auto;
}
// .ant-menu-item-group-title {
//   padding: 0 !important;
// }
.ant-tabs-nav-wrap {
  width: 100%;
  background: #ffffff;
  .ant-tabs-nav-scroll {
    width: 100%;
    .ant-tabs-nav {
      width: 100%;
      >div {
        width: 100%;
        display: flex;
        justify-content: space-around;
      }
    }
  }
}
.ant-tabs-nav .ant-tabs-tab-active {
  border-bottom: 3px solid #1890ff;
}
.ant-tabs-ink-bar {
  background-color: transparent !important;
}
</style>
