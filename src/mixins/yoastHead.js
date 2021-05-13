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
      // console.log(typeof yoastHead);
      function replaceAll(string, search, replace) {
        return string.split(search).join(replace);
      }
      yoastHead = replaceAll(
        yoastHead,
        "http://surfacemagic.2cubedtest.com/wp-content/",
        "../assets/remoteImages/wp-content/"
      );
      yoastHead = replaceAll(
        yoastHead,
        "https://surfacemagic.2cubedtest.com/wp-content/",
        "../assets/remoteImages/wp-content/"
      );

      const cleanHtml = this.sanitize(yoastHead, {
        allowedTags: false,
        allowedAttributes: false,
      });
      const rawJson = this.converter.html2json(cleanHtml);
      this.title = rawJson.child
        .map((el) => (el.tag === "title" ? el.child[0].text : null))
        .filter((el) => el)[0];
      const metas = rawJson.child.filter((tag) => tag.node === "element");
      const metasArray = metas
        .filter((m) => m.tag === "meta")
        .map((m) => m.attr);

      const scriptsArray = metas
        .filter((s) => s.tag === "script")
        .map((s) => {
          return {
            innerHTML: s.attr.type,
            type: s.child[0].text,
          };
        });

      // console.log(scriptsArray);
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
      console.log(meta);
      this.script = scriptsArray;
      this.meta = meta;
    },
  },
};
