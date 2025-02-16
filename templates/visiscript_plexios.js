(async () => {
    const VER = 
        'x.x.x' // %%%VERSION%%% 
    ;
    const VER_SUFFIX = '_' + VER.split('.').join('_');
    const CommonScript = await PlexiOS.HtmlUtil.loadComponent('CommonScript' + VER_SUFFIX);
    const VisiScriptBuilder = CommonScript.newEngineContextBuilder('VisiScript', VER);
    const EXT = {};
    // %%%EXTENSIONS%%%
    for (let k of Object.keys(EXT)) {
        VisiScriptBuilder.registerExtension(k, EXT[k]);
    }
    let VisiScript = VisiScriptBuilder.lockConfiguration();
    PlexiOs.HtmlUtil.registerComponent('VisiScript' + VER_SUFFIX, () => VisiScript);
})();
