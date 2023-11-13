<?php

namespace Drupal\om_pdf_embed_api\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure OM PDF Embed API settings for this site.
 */
class SettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'om_pdf_embed_api_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['om_pdf_embed_api.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['apikey'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Adobe API Key'),
      '#default_value' => $this->config('om_pdf_embed_api.settings')->get('apikey'),
      '#description' => "ok! ma description",
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
   /*
  public function validateForm(array &$form, FormStateInterface $form_state) {
    if ($form_state->getValue('example') != 'example') {
      $form_state->setErrorByName('example', $this->t('The value is not correct.'));
    }
    parent::validateForm($form, $form_state);
}*/

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->config('om_pdf_embed_api.settings')
      ->set('apikey', $form_state->getValue('apikey'))
      ->save();
    parent::submitForm($form, $form_state);
  }

}
