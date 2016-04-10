/**
 * Created by david on 4/10/2016.
 */
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt); //加载 load-grunt-tasks grunt插件

    //定义路径变量
    var path = {
        tmp: '.tmp',                        //临时目录
        dest: '.publish',                   //发布目录
        web: ''  //项目站点
    };

    //项目配置文件
    grunt.initConfig({
        //清楚文件和目录
        clean: {
            beforebuild: {
                files: [{
                    src: ['<%= path.dest %>/', '<%= path.tmp %>/']
                }]
            },
            afterbuild: {
                files: [{
                    src: ['<%= path.tmp %>/']
                }]
            }
        },

        //编译less文件为css
        less: {
            baseStyleCss: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true
                },
                src: 'content/stylesheet/less/config.less',
                dest: 'content/stylesheet/css/config.css'
            }
        },

        //生成雪碧图，并修改相应的css文件
        sprite: {
            options: {
                // 给雪碧图追加时间戳，默认不追加
                spritestamp: true
            },
            // image-set 示例
            imageKityMinderSprite: {
                options: {
                    useimageset: true,
                    imagepath: "content/images/slice/",
                    spritedest: '<%= path.tmp%>/images/slice/'
                },
                files: [{
                    // 启用动态扩展
                    expand: true,
                    // css文件源的文件夹
                    cwd: 'content/stylesheet/css',
                    // 匹配规则
                    src: '*.css',
                    // 导出css和sprite的路径地址
                    dest: '<%= path.tmp%>/css/',
                    // 导出的css名
                    ext: '.sprite.css'
                }]
            }
        },

        //拷贝文件
        copy: {
            fonts: {
                expand: true,
                cwd: 'content/fonts/',
                src: ['**'],
                dest: '<%= path.dest %>/fonts/',
                flatten: false
            },
            images: {
                expand: true,
                cwd: 'content/images/other',
                src: ['**'],
                dest: '<%= path.dest%>/images/other',
                flatten: false
            },
            spriteImages: {
                expand: true,
                cwd: '.tmp/images/slice',
                src: ['**'],
                dest: '<%= path.dest%>/images/slice',
                flatten: false
            },
            ico: {
                src: 'favicon.ico',
                dest: '<%= path.dest%>/'
            },
            indexCopy: {
                expand: true,
                src: ['index.html'],
                dest: '<%= path.dest%>/',
                flatten: false
            },
            appViewsCopy: {
                expand: true,
                cwd: 'app/',
                src: ['**/**.html'],
                dest: '<%= path.dest%>/app/',
                flatten: false
            }
        },

        //合并文件
        concat: {
            baseCss: {
                src: [
                    "bower_components/bootstrap/dist/css/bootstrap.css",
                    "bower_components/angular/angular-csp.css",
                    "bower_components/color-picker/dist/color-picker.css",
                    "bower_components/codemirror/lib/codemirror.css",
                    "bower_components/hotbox/hotbox.css",
                    ".tmp/css/config.sprite.css"
                ],
                dest: "<%= path.tmp%>/css/showcase.css"
            },
            kityminderJs: {
                src: [
                    "bower_components/angular/angular.js",
                    "bower_components/jquery/dist/jquery.js",
                    "bower_components/bootstrap/dist/js/bootstrap.js",
                    "bower_components/angular-bootstrap/ui-bootstrap.js",
                    "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                    "bower_components/seajs/dist/sea-debug.js",
                    "bower_components/color-picker/src/color-picker.js",
                    "bower_components/codemirror/lib/codemirror.js",
                    "bower_components/codemirror/mode/xml/xml.js",
                    "bower_components/codemirror/mode/javascript/javascript.js",
                    "bower_components/codemirror/mode/css/css.js",
                    "bower_components/codemirror/mode/htmlmixed/htmlmixed.js",
                    "bower_components/codemirror/mode/markdown/markdown.js",
                    "bower_components/codemirror/addon/mode/overlay.js",
                    "bower_components/codemirror/mode/gfm/gfm.js",
                    "bower_components/angular-ui-codemirror/ui-codemirror.js",
                    "bower_components/kity/dist/kity.js",
                    "bower_components/hotbox/hotbox.js",
                    "lib/kityminder/src/kityminder.js",
                    "bower_components/marked/lib/marked.js",
                    "app/kityminder/kityminder.app.js",
                    "app/kityminder/templates.js",
                    "app/kityminder/service/commandBinder.service.js",
                    "app/kityminder/service/config.service.js",
                    "app/kityminder/service/memory.service.js",
                    "app/kityminder/service/lang.zh-cn.service.js",
                    "app/kityminder/service/valueTransfer.service.js",
                    "app/kityminder/service/minder.service.js",
                    "app/kityminder/service/resource.service.js",
                    "app/kityminder/service/revokeDialog.service.js",
                    "app/_filter/lang.filter.js",
                    "app/_directive/kityminder/topTab/topTab.directive.js",
                    "app/_directive/kityminder/undoRedo/undoRedo.directive.js",
                    "app/_directive/kityminder/appendNode/appendNode.directive.js",
                    "app/_directive/kityminder/arrange/arrange.directive.js",
                    "app/_directive/kityminder/operation/operation.directive.js",
                    "app/_directive/kityminder/hyperLink/hyperLink.directive.js",
                    "app/_directive/kityminder/imageBtn/imageBtn.directive.js",
                    "app/_directive/kityminder/noteBtn/noteBtn.directive.js",
                    "app/_directive/kityminder/resourceEditor/resourceEditor.directive.js",
                    "app/_directive/kityminder/priorityEditor/priorityEditor.directive.js",
                    "app/_directive/kityminder/progressEditor/progressEditor.directive.js",
                    "app/_directive/kityminder/noteEditor/noteEditor.directive.js",
                    "app/_directive/kityminder/notePreviewer/notePreviewer.directive.js",
                    "app/_directive/kityminder/templateList/templateList.directive.js",
                    "app/_directive/kityminder/themeList/themeList.directive.js",
                    "app/_directive/kityminder/layout/layout.directive.js",
                    "app/_directive/kityminder/styleOperator/styleOperator.directive.js",
                    "app/_directive/kityminder/fontOperator/fontOperator.directive.js",
                    "app/_directive/kityminder/expandLevel/expandLevel.directive.js",
                    "app/_directive/kityminder/selectAll/selectAll.directive.js",
                    "app/_directive/kityminder/colorPanel/colorPanel.directive.js",
                    "app/_directive/kityminder/navigator/navigator.directive.js",
                    "app/_directive/kityminder/searchBox/searchBox.directive.js",
                    "app/_directive/kityminder/searchBtn/searchBtn.directive.js",
                    "app/kityminder/dialog/hyperlink/hyperlink.ctrl.js",
                    "app/kityminder/dialog/image/image.ctrl.js",
                    "app/kityminder/dialog/im-export-node/imExportNode.ctrl.js",
                    "app/_directive/kityminder/kityminderEditor/kityminderEditor.directive.js",
                    "lib/kityminder/src/expose-kityminder.js",
                    "app/app.module.js",
                    "app/kityminder/kityminder-main-controller.js"
                ],
                dest: "<%= path.tmp%>/js/showcase.js"
            }
        },

        //压缩css
        cssmin: {
            kopBaseCss: {
                src: ["<%= path.tmp%>/css/showcase.css"],
                dest: "<%= path.dest %>/css/showcase.css"
            }
        },

        //压缩Js
        uglify: {
            baseJs: {
                src: "<%= path.tmp%>/js/showcase.js",
                dest: "<%= path.dest%>/js/showcase.js"
            }
        },

        //文件重命名
        filerev: {
            build: {
                files: [{
                    src: ['<%= path.dest %>/js/**.js', '<%= path.dest %>/css/**'] //只是对js于css重新命名
                }]
            }
        },

        //替换文件前准备
        useminPrepare: {
            html: '<%= path.dest %/**/*.html',
            options: {
                dest: './<%= path.dest %>',
                root: './<%= path.dest %>'
            }
        },

        //替换文件
        usemin: {
            html: {
                files: [{
                    src: '<%= path.dest %>/**/*.html'
                }]
            },
            options: {
                assetsDirs: ['<%= path.dest %>']
            }
        }
    });

    grunt.registerTask(
        'build', //分组名称
        [        //该分组包含的任务
            'clean:beforebuild',
            'less',
            'sprite',
            'copy',
            'concat',
            'cssmin',
            'uglify',
            'filerev',
            'useminPrepare',
            'usemin',
            'clean:afterbuild'
        ]
    );
};