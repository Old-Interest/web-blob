<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <HomeHeader />
      </a-layout-header>
      <a-layout-content>
        <HomeSearch />
        <HeaderMenu :menuList="menuList" />
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeHeader from "./components/Home/HomeHeader";
import HomeSearch from "./components/Home/HomeSearch";
import HeaderMenu from "./components/Public/HeaderMenu";
export default {
  name: "App",
  components: {
    HomeHeader,
    HomeSearch,
    HeaderMenu
    // HelloWorld
  },
  data() {
    return {
      menuList: [
        {
          name: "护肤",
          children: [
            {
              name: "卸妆",
              children: [
                {
                  name: "卸妆水"
                },
                {
                  name: "卸妆油"
                },
                {
                  name: "卸妆膏"
                }
              ]
            },
            {
              name: "洁面"
            },
            {
              name: "喷雾"
            },
            {
              name: "化妆水"
            },
            {
              name: "乳液"
            },
            {
              name: "精华"
            },
            {
              name: "面霜"
            },
            {
              name: "眼霜"
            },
            {
              name: "眼部精华"
            },
            {
              name: "面膜",
              children: [
                {
                  name: "片状"
                },
                {
                  name: "涂抹式"
                }
              ]
            },
            {
              name: "润唇膏"
            },
            {
              name: "防晒",
              children: [
                {
                  name: "液体防晒"
                },
                {
                  name: "防晒喷雾"
                }
              ]
            }
          ]
        },
        {
          name: "彩妆",
          children: [
            {
              name: "眉部",
              children: [
                {
                  name: "眉笔"
                },
                {
                  name: "眉粉/染眉膏"
                }
              ]
            },
            {
              name: "眼部",
              children: [
                {
                  name: "眼影",
                  children: [
                    {
                      name: "液体眼影"
                    },
                    {
                      name: "眼影盘（固体）"
                    }
                  ]
                },
                {
                  name: "眼线",
                  children: [
                    {
                      name: "眼线液笔"
                    },
                    {
                      name: "眼线胶笔"
                    },
                    {
                      name: "眼线膏"
                    }
                  ]
                },
                {
                  name: "睫毛膏"
                }
              ]
            },
            {
              name: "面部",
              children: [
                {
                  name: "隔离"
                },
                {
                  name: "粉底",
                  children: [
                    {
                      name: "粉底液/粉底霜"
                    },
                    {
                      name: "粉饼"
                    }
                  ]
                },
                {
                  name: "定妆",
                  children: [
                    {
                      name: "散粉"
                    },
                    {
                      name: "定妆喷雾"
                    }
                  ]
                },
                {
                  name: "腮红"
                },
                {
                  name: "修容"
                },
                {
                  name: "高光"
                }
              ]
            },
            {
              name: "唇部",
              children: [
                {
                  name: "口红"
                },
                {
                  name: "唇油"
                }
              ]
            },
            {
              name: "香水"
            },
            {
              name: "发际线粉"
            }
          ]
        },
        {
          name: "头发护理",
          children: [
            {
              name: "洗发水"
            },
            {
              name: "护发素/发膜"
            },
            {
              name: "护发精油"
            }
          ]
        },
        {
          name: "身体护理",
          children: [
            {
              name: "沐浴露"
            },
            {
              name: "身体乳"
            },
            {
              name: "护手霜"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .ant-layout {
    height: 100%;
    .ant-layout-content {
      height: calc(100% - 64px);
      overflow: hidden;
    }
  }
}
.ant-layout-header {
  padding: 0 !important;
  background: #ffffff !important;
}
</style>
