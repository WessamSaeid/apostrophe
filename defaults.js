module.exports = {
  modules: {
    'apostrophe-utils': {},
    'apostrophe-tasks': {},
    'apostrophe-launder': {},
    'apostrophe-i18n': {},
    'apostrophe-db': {},
    'apostrophe-locks': {},
    'apostrophe-caches': {},
    'apostrophe-migrations': {},
    'apostrophe-express': {},
    'apostrophe-push': {},
    'apostrophe-urls': {},
    'apostrophe-templates': {},
    'apostrophe-permissions': {},
    'apostrophe-assets': {},
    'apostrophe-admin-bar': {},
    'apostrophe-notifications': {},
    'apostrophe-login': {},
    'apostrophe-browser-utils': {},
    'apostrophe-ui': {},
    'apostrophe-schemas': {},
    'apostrophe-docs': {},
    'apostrophe-versions': {},
    'apostrophe-tags': {},
    'apostrophe-modal': {},
    'apostrophe-attachments': {},
    'apostrophe-oembed': {},
    'apostrophe-pager': {},
    // global comes first so it can register a doc type manager and clean things up before
    // pages claims any orphan page types
    'apostrophe-global': {},
    'apostrophe-pages': {},
    'apostrophe-search': {},
    'apostrophe-any-page-manager': {},
    'apostrophe-areas': {},
    'apostrophe-rich-text-widgets': {},
    'apostrophe-html-widgets': {},
    'apostrophe-video-fields': {},
    'apostrophe-video-widgets': {},
    'apostrophe-groups': {},
    'apostrophe-users': {},
    'apostrophe-images': {},
    'apostrophe-images-widgets': {},
    'apostrophe-files': {},
    'apostrophe-files-widgets': {},
    'apostrophe-service-bridge': {}
  }
};
