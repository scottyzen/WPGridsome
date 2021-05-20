import sanitize from "sanitize-html";
import html2json from "html2json";

export const yoastHead = {
  data() {
    return {
      converter: html2json,
      sanitize,
      meta: [],
      title: null,
      description: null,
    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: this.meta,
      script: this.script,
    };
  },
  methods: {
    fetchMetaDatas(yoastHead) {
      function replaceAll(string, search, replace) {
        return string.split(search).join(replace);
      }
      yoastHead = replaceAll(
        yoastHead,
        `${process.env.GRIDSOME_YOAST_DOMAIN}/wp-content/`,
        `${process.env.GRIDSOME_DOMAIN}/remoteImages/wp-content/`
      );

      const cleanHtml = this.sanitize(yoastHead, {
        allowedTags: false,
        allowedAttributes: false,
      });
      const rawJson = this.converter.html2json(cleanHtml);
      this.title = rawJson.child
        .map((el) => (el.tag === "title" ? el.child[0].text : null))
        .filter((el) => el)[0];
      const elements = rawJson.child.filter((tag) => tag.node === "element");

      const metasArray = elements
        .filter((m) => m.tag === "meta")
        .map((m) => m.attr);

      const scriptsArray = elements
        .filter((s) => s.tag === "script")
        .map((s) => {
          return {
            innerHTML: s.attr.type,
            type: s.child[0].text,
          };
        });

      let meta = [];
      for (let i = 0; i < metasArray.length; i++) {
        let obj = {
          name: "",
          content: "",
          key: "",
        };
        obj.name = metasArray[i].property
          ? metasArray[i].property
          : metasArray[i].name;
        obj.content =
          typeof metasArray[i].content === "string"
            ? metasArray[i].content
            : metasArray[i].content.join(" ");
        obj.key = metasArray[i].property
          ? metasArray[i].property
          : metasArray[i].name;
        meta.push(obj);
      }
      this.script = scriptsArray;
      this.meta = meta;
    },
  },
};
