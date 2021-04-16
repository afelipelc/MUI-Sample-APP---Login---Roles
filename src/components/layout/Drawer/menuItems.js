const items = [
  {
    id: 'item-1',
    text: 'Autos Cards',
    icon: 'folder',
    url: '/cars',
    denyFor: ['ninguno'], // roles que no deben ver esta opcion
  },
  {
    id: 'item-2',
    text: 'Sliders',
    icon: 'view_module',
    url: '/sliders',
    denyFor: ['ninguno'],
  },
  {
    id: 'item-3',
    text: 'Galerías de Imágenes',
    icon: 'recent_actors',
    url: '/galerias',
    denyFor: ['ninguno'],
  },
  {
    id: 'item-4',
    text: 'Asignaturas / Profesores',
    icon: 'ballot',
    denyFor: ['ninguno', 'usuario'],
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
