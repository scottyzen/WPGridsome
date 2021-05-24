import html2json from "html2json";
import sanitize from "sanitize-html";

export const yoastHead = {
  data() {
    return {
      converter: html2json,
      sanitize,
      scMeta: [],
      scScript: [],
    };
  },
  metaInfo() {
    return {
      title: this.scTitle,
      meta: this.scScript,
      script: this.scScript,
    };
  },
  methods: {
    fetchMetaDatas(yoastHead) {
      // function replaceAll(string, search, replace) {
      //   return string.split(search).join(replace);
      // }
      // yoastHead = replaceAll(
      //   yoastHead,
      //   `${process.env.GRIDSOME_YOAST_DOMAIN}/wp-content/`,
      //   `${process.env.GRIDSOME_DOMAIN}/images/remoteImages/wp-content/`
      // );

      const cleanHtml = this.sanitize(yoastHead, {
        allowedTags: false,
        allowedAttributes: false,
      });
      const rawJson = this.converter.html2json(cleanHtml);
      this.scTitle = rawJson.child.map((el) => (el.tag === "title" ? el.child[0].text : null)).filter((el) => el)[0];
      const elements = rawJson.child.filter((tag) => tag.node === "element");
      const metasArray = elements.filter((m) => m.tag === "meta").map((m) => m.attr);
      const scriptsArray = elements.filter((s) => s.tag === "script").map((s) => {
          return {
            innerHTML: s.attr.type,
            type: s.child[0].text,
          };
        });

      let meta = [];
      for (let i = 0; i < metasArray.length; i++) {
        let obj = { name: "", content: "", key: "" };
        obj.name = metasArray[i].property ? metasArray[i].property : metasArray[i].name;
        obj.content = typeof metasArray[i].content === "string" ? metasArray[i].content : metasArray[i].content.join(" ");
        obj.key = metasArray[i].property ? metasArray[i].property : metasArray[i].name;
        meta.push(obj);
      }
      this.scScript = scriptsArray;
      this.scMeta = meta;
    },
  },
};
