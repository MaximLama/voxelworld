import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import InlineCode from '@editorjs/inline-code';
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";

(function() {
    let editor = new EditorJS({
        holder: "description",
        autofocus: false,
        /**
         * This Tool will be used as default
         */
        defaultBlock: "paragraph",
        tools: {
            header: {
                class: Header,
                shortcut: "CMD+SHIFT+H"
            },
            list: {
                class: List
            },
            paragraph: {
                class: Paragraph,
                config: {
                    placeholder: "Описание на детальной странице"
                }
            },
            inlineCode: {
                class: InlineCode,
                shortcut: 'CMD+SHIFT+M',
            },

        },
        onReady: function() {
            console.log("Модуль подключен");
        },
        onChange: function() {

        }
    });
})();