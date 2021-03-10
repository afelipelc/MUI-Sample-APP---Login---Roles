const items = [
  {
    id: 'item-1',
    text: 'Autos Cards',
    icon: 'folder',
    url: '/cars',
    // denyFor: ['none'],
  },
  {
    id: 'item-2',
    text: 'Sliders',
    icon: 'view_module',
    url: '/sliders',
    // denyFor: ['none'],
  },
  {
    id: 'item-3',
    text: 'Galerías de Imágenes',
    icon: 'recent_actors',
    url: '/galerias',
    //denyFor: ['none', 'role2'],
  },
  {
    id: 'item-4',
    text: 'Asignaturas / Profesores',
    icon: 'ballot',
    denyFor: ['none', 'role2'],
    childs: [
      {
        id: 'sub-1',
        text: 'Asignaturas',
        icon: 'format_list_bulleted',
        url: '/asignaturas',
        // denyFor: ['none', 'role2'],
      },
      {
        id: 'sub-2',
        text: 'Agregar Profesor',
        icon: 'featured_play_list',
        url: '/profesores/agregar',
        // denyFor: ['none', 'role2'],
      },
    ],
  },
];

export default items;
