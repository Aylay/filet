'use strict';

/**
 * prospect controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::prospect.prospect', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);

    const mailList = 'lattali@beavers-agency.fr'
    let textMail = 'Bonjour'
    textMail += '<br /><br />'
    textMail += "Cette personne a fait une demande d'informations.<br /><br />"

    textMail += 'Ses coordonnées :'
    textMail += '<br />'
    textMail += 'Prénom : ' + response.data.attributes.prenom + '<br />'
    textMail += 'Nom : ' + response.data.attributes.nom + '<br />'
    textMail += 'Société : ' + response.data.attributes.societe + '<br />'
    textMail += 'Fonction : ' + response.data.attributes.fonction + '<br />'
    textMail += 'Email : ' + response.data.attributes.email + '<br />'
    textMail += 'Téléphone : ' + response.data.attributes.telephone + '<br />'
    textMail += "Code postal de l'entreprise : " + response.data.attributes.codePostal + '<br />'
    textMail += '<br />'

    await strapi
    .plugin('email')
    .service('email')
    .send({
      to: mailList,
      from: 'ocs@richard.fr',
      subject: 'Formulaire abonnement',
      html: textMail,
    });
  }
}))
