(async () => {
    const VER = 
'0.1.0'
    ;
    const VER_SUFFIX = '_' + VER.split('.').join('_');
    const CommonScript = await PlexiOS.HtmlUtil.loadComponent('CommonScript' + VER_SUFFIX);
    const VisiScriptBuilder = CommonScript.newEngineContextBuilder('VisiScript', VER);
    const EXT = {};
EXT.draw_ellipse = (task, args) => {
    throw new Error();
};

EXT.draw_fill = (task, args) => {
    throw new Error();
};

EXT.draw_flush = (task, args) => {
    throw new Error();
};

EXT.draw_get_screen_size = (task, args) => {
    throw new Error();
};

EXT.draw_image = (task, args) => {
    throw new Error();
};

EXT.draw_line = (task, args) => {
    throw new Error();
};

EXT.draw_rectangle = (task, args) => {
    throw new Error();
};

EXT.image_clone_resize = (task, args) => {
    throw new Error();
};

EXT.image_clone_rotate = (task, args) => {
    throw new Error();
};

EXT.image_get_resource = (task, args) => {
    throw new Error();
};

EXT.image_is_external_resource_loaded = (task, args) => {
    throw new Error();
};

EXT.image_load_external_resource_begin = (task, args) => {
    throw new Error();
};

EXT.set_frame_rate = (task, args) => {
    throw new Error();
};

    for (let k of Object.keys(EXT)) {
        VisiScriptBuilder.registerExtension(k, EXT[k]);
    }
    let VisiScript = VisiScriptBuilder.lockConfiguration();
    PlexiOs.HtmlUtil.registerComponent('VisiScript' + VER_SUFFIX, () => VisiScript);
})();
